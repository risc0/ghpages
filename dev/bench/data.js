window.BENCHMARK_DATA = {
  "lastUpdate": 1745345367476,
  "repoUrl": "https://github.com/risc0/risc0",
  "entries": {
    "Linux-nvidia_rtx_3090_ti": [
      {
        "commit": {
          "author": {
            "email": "112983328+mars-risc0@users.noreply.github.com",
            "name": "Mars Saxman",
            "username": "mars-risc0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67577e8b8f6ded8252f3c7c6ae25ca15faf2abee",
          "message": "ZKVM-1345: Load word-aligned regions by words, not bytes (#3115)\n\nThe base addr and size parameters of a `load_region` call are very often\nword-aligned, so we can load more efficiently word-wise than with a\nbyte-by-byte loop. This improves performance on some bigint-heavy\nworkloads: datasheet exec time for `zeth_shapella_50` goes from 757ms to\n413ms, with smaller improvements seen on the other segments.",
          "timestamp": "2025-04-22T17:29:00Z",
          "tree_id": "9ac97f41abd7114b12908d66f734cf07ca358c79",
          "url": "https://github.com/risc0/risc0/commit/67577e8b8f6ded8252f3c7c6ae25ca15faf2abee"
        },
        "date": 1745345336665,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "execute",
            "value": 24392328,
            "unit": "Hz"
          },
          {
            "name": "prove/poseidon2",
            "value": 838713,
            "unit": "Hz"
          },
          {
            "name": "lift",
            "value": 644195,
            "unit": "Hz"
          },
          {
            "name": "join",
            "value": 433655,
            "unit": "Hz"
          },
          {
            "name": "composite",
            "value": 788059,
            "unit": "Hz"
          },
          {
            "name": "succinct",
            "value": 582646,
            "unit": "Hz"
          }
        ]
      }
    ],
    "Linux-g6.xlarge": [
      {
        "commit": {
          "author": {
            "email": "112983328+mars-risc0@users.noreply.github.com",
            "name": "Mars Saxman",
            "username": "mars-risc0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67577e8b8f6ded8252f3c7c6ae25ca15faf2abee",
          "message": "ZKVM-1345: Load word-aligned regions by words, not bytes (#3115)\n\nThe base addr and size parameters of a `load_region` call are very often\nword-aligned, so we can load more efficiently word-wise than with a\nbyte-by-byte loop. This improves performance on some bigint-heavy\nworkloads: datasheet exec time for `zeth_shapella_50` goes from 757ms to\n413ms, with smaller improvements seen on the other segments.",
          "timestamp": "2025-04-22T17:29:00Z",
          "tree_id": "9ac97f41abd7114b12908d66f734cf07ca358c79",
          "url": "https://github.com/risc0/risc0/commit/67577e8b8f6ded8252f3c7c6ae25ca15faf2abee"
        },
        "date": 1745345356898,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "execute",
            "value": 31642562,
            "unit": "Hz"
          },
          {
            "name": "prove/poseidon2",
            "value": 543486,
            "unit": "Hz"
          },
          {
            "name": "lift",
            "value": 570271,
            "unit": "Hz"
          },
          {
            "name": "join",
            "value": 365147,
            "unit": "Hz"
          },
          {
            "name": "composite",
            "value": 521872,
            "unit": "Hz"
          },
          {
            "name": "succinct",
            "value": 406817,
            "unit": "Hz"
          }
        ]
      }
    ]
  }
}