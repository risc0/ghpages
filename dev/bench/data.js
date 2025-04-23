window.BENCHMARK_DATA = {
  "lastUpdate": 1745429597414,
  "repoUrl": "https://github.com/risc0/risc0",
  "entries": {
    "Linux-nvidia_rtx_3090_ti": [
      {
        "commit": {
          "author": {
            "name": "Mars Saxman",
            "username": "mars-risc0",
            "email": "112983328+mars-risc0@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "67577e8b8f6ded8252f3c7c6ae25ca15faf2abee",
          "message": "ZKVM-1345: Load word-aligned regions by words, not bytes (#3115)\n\nThe base addr and size parameters of a `load_region` call are very often\nword-aligned, so we can load more efficiently word-wise than with a\nbyte-by-byte loop. This improves performance on some bigint-heavy\nworkloads: datasheet exec time for `zeth_shapella_50` goes from 757ms to\n413ms, with smaller improvements seen on the other segments.",
          "timestamp": "2025-04-22T17:29:00Z",
          "url": "https://github.com/risc0/risc0/commit/67577e8b8f6ded8252f3c7c6ae25ca15faf2abee"
        },
        "date": 1745429058831,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "execute",
            "value": 26548730,
            "unit": "Hz"
          },
          {
            "name": "prove/poseidon2",
            "value": 840377,
            "unit": "Hz"
          },
          {
            "name": "lift",
            "value": 648328,
            "unit": "Hz"
          },
          {
            "name": "join",
            "value": 433498,
            "unit": "Hz"
          },
          {
            "name": "composite",
            "value": 793472,
            "unit": "Hz"
          },
          {
            "name": "succinct",
            "value": 579246,
            "unit": "Hz"
          }
        ]
      }
    ],
    "Linux-cpu": [
      {
        "commit": {
          "author": {
            "name": "Mars Saxman",
            "username": "mars-risc0",
            "email": "112983328+mars-risc0@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "67577e8b8f6ded8252f3c7c6ae25ca15faf2abee",
          "message": "ZKVM-1345: Load word-aligned regions by words, not bytes (#3115)\n\nThe base addr and size parameters of a `load_region` call are very often\nword-aligned, so we can load more efficiently word-wise than with a\nbyte-by-byte loop. This improves performance on some bigint-heavy\nworkloads: datasheet exec time for `zeth_shapella_50` goes from 757ms to\n413ms, with smaller improvements seen on the other segments.",
          "timestamp": "2025-04-22T17:29:00Z",
          "url": "https://github.com/risc0/risc0/commit/67577e8b8f6ded8252f3c7c6ae25ca15faf2abee"
        },
        "date": 1745429293910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "execute",
            "value": 28799014,
            "unit": "Hz"
          },
          {
            "name": "prove/poseidon2",
            "value": 15508,
            "unit": "Hz"
          },
          {
            "name": "lift",
            "value": 43648,
            "unit": "Hz"
          },
          {
            "name": "join",
            "value": 42246,
            "unit": "Hz"
          },
          {
            "name": "composite",
            "value": 15614,
            "unit": "Hz"
          },
          {
            "name": "succinct",
            "value": 14399,
            "unit": "Hz"
          }
        ]
      }
    ],
    "macOS-apple_m2_pro": [
      {
        "commit": {
          "author": {
            "name": "Mars Saxman",
            "username": "mars-risc0",
            "email": "112983328+mars-risc0@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "67577e8b8f6ded8252f3c7c6ae25ca15faf2abee",
          "message": "ZKVM-1345: Load word-aligned regions by words, not bytes (#3115)\n\nThe base addr and size parameters of a `load_region` call are very often\nword-aligned, so we can load more efficiently word-wise than with a\nbyte-by-byte loop. This improves performance on some bigint-heavy\nworkloads: datasheet exec time for `zeth_shapella_50` goes from 757ms to\n413ms, with smaller improvements seen on the other segments.",
          "timestamp": "2025-04-22T17:29:00Z",
          "url": "https://github.com/risc0/risc0/commit/67577e8b8f6ded8252f3c7c6ae25ca15faf2abee"
        },
        "date": 1745429311739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "execute",
            "value": 45259200,
            "unit": "Hz"
          },
          {
            "name": "prove/poseidon2",
            "value": 13659,
            "unit": "Hz"
          },
          {
            "name": "lift",
            "value": 166609,
            "unit": "Hz"
          },
          {
            "name": "join",
            "value": 150999,
            "unit": "Hz"
          },
          {
            "name": "composite",
            "value": 13874,
            "unit": "Hz"
          },
          {
            "name": "succinct",
            "value": 13587,
            "unit": "Hz"
          }
        ]
      }
    ],
    "Linux-g6.xlarge": [
      {
        "commit": {
          "author": {
            "name": "Mars Saxman",
            "username": "mars-risc0",
            "email": "112983328+mars-risc0@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "67577e8b8f6ded8252f3c7c6ae25ca15faf2abee",
          "message": "ZKVM-1345: Load word-aligned regions by words, not bytes (#3115)\n\nThe base addr and size parameters of a `load_region` call are very often\nword-aligned, so we can load more efficiently word-wise than with a\nbyte-by-byte loop. This improves performance on some bigint-heavy\nworkloads: datasheet exec time for `zeth_shapella_50` goes from 757ms to\n413ms, with smaller improvements seen on the other segments.",
          "timestamp": "2025-04-22T17:29:00Z",
          "url": "https://github.com/risc0/risc0/commit/67577e8b8f6ded8252f3c7c6ae25ca15faf2abee"
        },
        "date": 1745429586148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "execute",
            "value": 31082916,
            "unit": "Hz"
          },
          {
            "name": "prove/poseidon2",
            "value": 547722,
            "unit": "Hz"
          },
          {
            "name": "lift",
            "value": 569316,
            "unit": "Hz"
          },
          {
            "name": "join",
            "value": 364434,
            "unit": "Hz"
          },
          {
            "name": "composite",
            "value": 526872,
            "unit": "Hz"
          },
          {
            "name": "succinct",
            "value": 409339,
            "unit": "Hz"
          }
        ]
      }
    ]
  }
}