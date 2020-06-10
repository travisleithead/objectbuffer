import { getInternalAPI } from "./utils";
import { getCacheFor } from "./externalObjectsCache";
import { getAllLinkedAddresses } from "./getAllLinkedAddresses";
import { decrementRefCountWithNum } from "./store";

/**
 *  Dispose the given objectWrapper, and re-claim the memory
 *  This is not needed on systems that supports weak-refs
 */
export function disposeWrapperObject(value: any) {
  const internalApi = getInternalAPI(value);

  const entryPointer = internalApi.getEntryPointer();

  const newRefCount = internalApi.destroy();
  getCacheFor(internalApi.getCarrier()).delete(entryPointer);

  if (newRefCount === 0) {
    const addressesToFree = getAllLinkedAddresses(
      internalApi.getCarrier().heap,
      false,
      entryPointer
    );

    const { allocator, heap } = internalApi.getCarrier();

    for (const address of addressesToFree.leafAddresses) {
      allocator.free(address);
    }

    for (const [address, count] of addressesToFree.arcAddresses) {
      decrementRefCountWithNum(heap, address, count);
    }

    return true;
  }

  return false;
}