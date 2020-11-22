window.BENCHMARK_DATA = {
  "lastUpdate": 1606063295637,
  "repoUrl": "https://github.com/Bnaya/objectbuffer",
  "entries": {
    "benchmarkjs, node 14": [
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "b2c737b7bf029982da1a286867fdca4c5cff2d4c",
          "message": "Deopts and benchmarks",
          "timestamp": "2020-09-19T12:41:25Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/137/commits/b2c737b7bf029982da1a286867fdca4c5cff2d4c"
        },
        "date": 1600557237895,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 11097,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 118,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 111,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 123,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 27377,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 8289758,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1802847,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1745070,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1738221,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 16710,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 1052645,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 990420,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 966123,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 904018,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2638466,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "d5a9a71b386a525bdd48198087e7968697974f7f",
          "message": "Deopts and benchmarks",
          "timestamp": "2020-09-19T12:41:25Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/137/commits/d5a9a71b386a525bdd48198087e7968697974f7f"
        },
        "date": 1600575340729,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 10148,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 109,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 103,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 112,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 24114,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7392124,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1530745,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1506558,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1463411,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 13662,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 818802,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 811073,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 813065,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 824679,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2306860,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "93 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "a684207b157ef4fa6b1213ac2b1ffc7b2e7a55ab",
          "message": "Deopts and benchmarks",
          "timestamp": "2020-09-19T12:41:25Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/137/commits/a684207b157ef4fa6b1213ac2b1ffc7b2e7a55ab"
        },
        "date": 1600576372801,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 10588,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 108,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 102,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 110,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 22903,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7403422,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1447807,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1437091,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1447600,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14016,
            "range": "±0.78%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 878185,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 854714,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 828257,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 837059,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2206153,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "ab625c846103dc296f0e3639bff2b021ea2651bd",
          "message": "benchmarks-and-pref-iteration",
          "timestamp": "2020-09-20T04:35:49Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/138/commits/ab625c846103dc296f0e3639bff2b021ea2651bd"
        },
        "date": 1600644075192,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 10780,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 103,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 99.83,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 108,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 22463,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7478069,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1471663,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1012836,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1010666,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 13578,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 842352,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 835881,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 655776,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 661698,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2171164,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 1e6",
            "value": 1.05,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "7 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "ab625c846103dc296f0e3639bff2b021ea2651bd",
          "message": "benchmarks-and-pref-iteration",
          "timestamp": "2020-09-20T04:35:49Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/138/commits/ab625c846103dc296f0e3639bff2b021ea2651bd"
        },
        "date": 1600644432702,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 10161,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 105,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 97.73,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 109,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 23207,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7108665,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1509790,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1413548,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1437061,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14186,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 860026,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 817811,
            "range": "±2.83%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 811382,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 820134,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2501527,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 1e6",
            "value": 1.16,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "7 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "409df9ab06b7e01502f3b31d4bf0c1e43cf485cc",
          "message": "General iteration",
          "timestamp": "2020-09-23T18:33:32Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/140/commits/409df9ab06b7e01502f3b31d4bf0c1e43cf485cc"
        },
        "date": 1601052109224,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 10817,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 105,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 97.56,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 106,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 25009,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7127168,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1598755,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1506111,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1508455,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14500,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 867417,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 831866,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 815126,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 827773,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2334502,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 1e6",
            "value": 1.22,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "8 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "a769c40a3c6229006c9fa4b06e4181b6a7637b0a",
          "message": "Update benchmarks mem size",
          "timestamp": "2020-10-05T04:14:51Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/143/commits/a769c40a3c6229006c9fa4b06e4181b6a7637b0a"
        },
        "date": 1603674355240,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 7336,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 101,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 93.79,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 105,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 23681,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6980344,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "98 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1507846,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "97 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1413186,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1413574,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 13879,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "97 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 824800,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 804519,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 776079,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 784972,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2370663,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 1.19,
            "range": "±1.01%",
            "unit": "ops/sec",
            "extra": "7 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "b49c17092ff2ca2031008e193f2e85c913098b88",
          "message": "Allocator iteration",
          "timestamp": "2020-10-26T01:06:52Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/142/commits/b49c17092ff2ca2031008e193f2e85c913098b88"
        },
        "date": 1603674671308,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 7198,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 110,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 107,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 118,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 26743,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7953545,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1787795,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1677601,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1653294,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 15231,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 978238,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 907283,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 912394,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 921775,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2774813,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 13.88,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "39 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "7458e4f3060bdd0f132c97083bf3bbe37476be6b",
          "message": "Upgrade deps",
          "timestamp": "2020-10-26T01:21:30Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/144/commits/7458e4f3060bdd0f132c97083bf3bbe37476be6b"
        },
        "date": 1603675858259,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 6362,
            "range": "±4.08%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 102,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 96.17,
            "range": "±2.43%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 106,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 23555,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7140663,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1497886,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1423600,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1426342,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 13820,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 801170,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 785091,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 778640,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 795571,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2469520,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 12.56,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "4629bf31e6eb0cf70c9fc543dc4337aa29c57f37",
          "message": "Maintenance",
          "timestamp": "2020-11-02T12:39:36Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/145/commits/4629bf31e6eb0cf70c9fc543dc4337aa29c57f37"
        },
        "date": 1606063287973,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 6397,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 90.17,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 91.2,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 95.37,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 22077,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6967686,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1346119,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1277302,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1294131,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 13559,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 816247,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 800295,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 765195,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 730914,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2106489,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 11.84,
            "range": "±2.79%",
            "unit": "ops/sec",
            "extra": "34 samples"
          }
        ]
      }
    ],
    "benchmarkjs, node 12": [
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "b2c737b7bf029982da1a286867fdca4c5cff2d4c",
          "message": "Deopts and benchmarks",
          "timestamp": "2020-09-19T12:41:25Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/137/commits/b2c737b7bf029982da1a286867fdca4c5cff2d4c"
        },
        "date": 1600557240530,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 2022,
            "range": "±5.18%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 100,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 95.96,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 102,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 24504,
            "range": "±0.75%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7254685,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1571951,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1603763,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1597374,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14582,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 975823,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 942014,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 908285,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 927117,
            "range": "±0.64%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2707601,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "d5a9a71b386a525bdd48198087e7968697974f7f",
          "message": "Deopts and benchmarks",
          "timestamp": "2020-09-19T12:41:25Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/137/commits/d5a9a71b386a525bdd48198087e7968697974f7f"
        },
        "date": 1600575339282,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 2079,
            "range": "±5.72%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 98.63,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 94.58,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 106,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 24766,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6648240,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1715429,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1495147,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1499520,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14178,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 905143,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 903832,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 825357,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 852830,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2849404,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "93 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "a684207b157ef4fa6b1213ac2b1ffc7b2e7a55ab",
          "message": "Deopts and benchmarks",
          "timestamp": "2020-09-19T12:41:25Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/137/commits/a684207b157ef4fa6b1213ac2b1ffc7b2e7a55ab"
        },
        "date": 1600576371573,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 2158,
            "range": "±5.81%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 103,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 97.88,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 109,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 25066,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7301189,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1749371,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1565947,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1577705,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 15309,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 971759,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 930407,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 900394,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 916392,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2761281,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "88 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "ab625c846103dc296f0e3639bff2b021ea2651bd",
          "message": "benchmarks-and-pref-iteration",
          "timestamp": "2020-09-20T04:35:49Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/138/commits/ab625c846103dc296f0e3639bff2b021ea2651bd"
        },
        "date": 1600644072624,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 2011,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 104,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 101,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 110,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 25698,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6755452,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1731608,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1660921,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1614533,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 15099,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 910648,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 895667,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 880892,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 898432,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2867869,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 1e6",
            "value": 1.22,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "8 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "ab625c846103dc296f0e3639bff2b021ea2651bd",
          "message": "benchmarks-and-pref-iteration",
          "timestamp": "2020-09-20T04:35:49Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/138/commits/ab625c846103dc296f0e3639bff2b021ea2651bd"
        },
        "date": 1600644445913,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 2057,
            "range": "±4.99%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 92.91,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 96.58,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 103,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 24910,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7179143,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1715626,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1612126,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1586096,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 13779,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 931618,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 933114,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 890691,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 911867,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2649373,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 1e6",
            "value": 0.98,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "7 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "409df9ab06b7e01502f3b31d4bf0c1e43cf485cc",
          "message": "General iteration",
          "timestamp": "2020-09-23T18:33:32Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/140/commits/409df9ab06b7e01502f3b31d4bf0c1e43cf485cc"
        },
        "date": 1601052110999,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 1e6",
            "value": 1771,
            "range": "±6.09%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "create with 2500 comments. size: 1e6",
            "value": 98.06,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 1e6",
            "value": 94.07,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "create with all mock data rows. size: 1e6",
            "value": 103,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 24912,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6495162,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1587306,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1577964,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1552720,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14335,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 812868,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 821826,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 806400,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 817091,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2773071,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 1e6",
            "value": 1.22,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "8 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "a769c40a3c6229006c9fa4b06e4181b6a7637b0a",
          "message": "Update benchmarks mem size",
          "timestamp": "2020-10-05T04:14:51Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/143/commits/a769c40a3c6229006c9fa4b06e4181b6a7637b0a"
        },
        "date": 1603674386141,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 1343,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 98.77,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 99.88,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 103,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 25438,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6874054,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1674860,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1605432,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1594017,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 15084,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 895900,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 868494,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 862324,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 866932,
            "range": "±1.23%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2896037,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 1.27,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "8 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "b49c17092ff2ca2031008e193f2e85c913098b88",
          "message": "Allocator iteration",
          "timestamp": "2020-10-26T01:06:52Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/142/commits/b49c17092ff2ca2031008e193f2e85c913098b88"
        },
        "date": 1603674708892,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 1292,
            "range": "±7.21%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 101,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 102,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 106,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 26191,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6993980,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1765164,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1668529,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1676258,
            "range": "±3.49%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 15473,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 925646,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 919791,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 893703,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 897005,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2972731,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 12.98,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "37 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "7458e4f3060bdd0f132c97083bf3bbe37476be6b",
          "message": "Upgrade deps",
          "timestamp": "2020-10-26T01:21:30Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/144/commits/7458e4f3060bdd0f132c97083bf3bbe37476be6b"
        },
        "date": 1603675858727,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 1272,
            "range": "±8.93%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 98.62,
            "range": "±15.98%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 102,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 108,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 25401,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 6928849,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1677542,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1580780,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "97 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1550897,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 14896,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 895878,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 865397,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 852629,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 866540,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2835787,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 12.61,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "committer": {
            "name": "Bnaya",
            "username": "Bnaya"
          },
          "id": "4629bf31e6eb0cf70c9fc543dc4337aa29c57f37",
          "message": "Maintenance",
          "timestamp": "2020-11-02T12:39:36Z",
          "url": "https://github.com/Bnaya/objectbuffer/pull/145/commits/4629bf31e6eb0cf70c9fc543dc4337aa29c57f37"
        },
        "date": 1606063295108,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "create empty, size: 2e6",
            "value": 1241,
            "range": "±7.51%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "create with 2500 comments. size: 2e6",
            "value": 104,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "save 2500 comments into pre-created OB, size: 2e6",
            "value": 102,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "create with all mock data rows. size: 2e6",
            "value": 107,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "A-Z object keys",
            "value": 26749,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - non-existing",
            "value": 7082922,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop Lookup in operator - existing",
            "value": 1819020,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "A-Z object prop access T",
            "value": 1756220,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "A-Z object prop access Z",
            "value": 1730935,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object keys",
            "value": 15835,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - non-existing",
            "value": 948196,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop Lookup in operator - existing",
            "value": 915177,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 14ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 910634,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "OB_WITH_NA2Z_KEYS object prop access 3ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "value": 915680,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Array access. length: 1000",
            "value": 2879743,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "object memory free. K1000RowsMockData, pre-created OB, size: 2e6",
            "value": 13.28,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "37 samples"
          }
        ]
      }
    ]
  }
}