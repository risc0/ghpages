window.BENCHMARK_DATA = {
  "lastUpdate": 1677283425048,
  "repoUrl": "https://github.com/risc0/risc0",
  "entries": {
    "macOS-intel_uhd_630": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677268641879,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2838274248,
            "range": "± 8398925",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2844272289,
            "range": "± 12216578",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1080678300,
            "range": "± 8704592",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1084484843,
            "range": "± 8020593",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "macOS-cpu": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677268645890,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4080768397,
            "range": "± 36964337",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4116963037,
            "range": "± 58260103",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069260973,
            "range": "± 9987294",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1062913807,
            "range": "± 4770931",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e4d9123334a6ba4bf15069afb393d766067c7f",
          "message": "Benchmark workflows (#398)\n\n* Added first rev of benchmark workflow\r\n\r\n* Fixed matrix.arch typo\r\n\r\n* Update repo name\r\n\r\n* Drops token PERMS and moved gh-action-bench to v1\r\n\r\n* Broke up benchmarks into two workflows\r\n\r\nCreated a Criterion compare workflow for PRs and kept the github pages\r\nworkflow for all pushes to main\r\n\r\n* Added required branchName to workflow\r\n\r\n* corrected benchmark name\r\n\r\n* test change\r\n\r\n* Fixed trailing }\r\n\r\n* Added PR trigger for testing\r\n\r\n* Removed the PR trigger for bench_trends\r\n\r\n* Test commit - testing PR check workflow updates",
          "timestamp": "2023-02-24T15:41:46-08:00",
          "tree_id": "d5a73b982877112e322f71ff92f14573d32d9c9f",
          "url": "https://github.com/risc0/risc0/commit/d6e4d9123334a6ba4bf15069afb393d766067c7f"
        },
        "date": 1677283424030,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4004992902,
            "range": "± 24430613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4056342101,
            "range": "± 50180922",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1068643689,
            "range": "± 12425307",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1075797874,
            "range": "± 11528393",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Linux-nvidia_rtx_a5000": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677268657858,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 849934198,
            "range": "± 8532155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 847133057,
            "range": "± 5965451",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 470189269,
            "range": "± 3154242",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 475628833,
            "range": "± 4749081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e4d9123334a6ba4bf15069afb393d766067c7f",
          "message": "Benchmark workflows (#398)\n\n* Added first rev of benchmark workflow\r\n\r\n* Fixed matrix.arch typo\r\n\r\n* Update repo name\r\n\r\n* Drops token PERMS and moved gh-action-bench to v1\r\n\r\n* Broke up benchmarks into two workflows\r\n\r\nCreated a Criterion compare workflow for PRs and kept the github pages\r\nworkflow for all pushes to main\r\n\r\n* Added required branchName to workflow\r\n\r\n* corrected benchmark name\r\n\r\n* test change\r\n\r\n* Fixed trailing }\r\n\r\n* Added PR trigger for testing\r\n\r\n* Removed the PR trigger for bench_trends\r\n\r\n* Test commit - testing PR check workflow updates",
          "timestamp": "2023-02-24T15:41:46-08:00",
          "tree_id": "d5a73b982877112e322f71ff92f14573d32d9c9f",
          "url": "https://github.com/risc0/risc0/commit/d6e4d9123334a6ba4bf15069afb393d766067c7f"
        },
        "date": 1677282930017,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 850045553,
            "range": "± 5111417",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 847868956,
            "range": "± 10299421",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 471366536,
            "range": "± 4776066",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 474798782,
            "range": "± 4781342",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Linux-cpu": [
      {
        "commit": {
          "author": {
            "name": "risc0",
            "username": "risc0"
          },
          "committer": {
            "name": "risc0",
            "username": "risc0"
          },
          "id": "0e9b54d3398ad7dcda761a08d8162142b7d29f07",
          "message": "Benchmark workflows",
          "timestamp": "2023-02-24T19:43:22Z",
          "url": "https://github.com/risc0/risc0/pull/398/commits/0e9b54d3398ad7dcda761a08d8162142b7d29f07"
        },
        "date": 1677269143981,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4628054936,
            "range": "± 43372102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4620920239,
            "range": "± 30968047",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1777712917,
            "range": "± 5870886",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1786271552,
            "range": "± 12836425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parker@risczero.com",
            "name": "Parker Thompson",
            "username": "mothran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e4d9123334a6ba4bf15069afb393d766067c7f",
          "message": "Benchmark workflows (#398)\n\n* Added first rev of benchmark workflow\r\n\r\n* Fixed matrix.arch typo\r\n\r\n* Update repo name\r\n\r\n* Drops token PERMS and moved gh-action-bench to v1\r\n\r\n* Broke up benchmarks into two workflows\r\n\r\nCreated a Criterion compare workflow for PRs and kept the github pages\r\nworkflow for all pushes to main\r\n\r\n* Added required branchName to workflow\r\n\r\n* corrected benchmark name\r\n\r\n* test change\r\n\r\n* Fixed trailing }\r\n\r\n* Added PR trigger for testing\r\n\r\n* Removed the PR trigger for bench_trends\r\n\r\n* Test commit - testing PR check workflow updates",
          "timestamp": "2023-02-24T15:41:46-08:00",
          "tree_id": "d5a73b982877112e322f71ff92f14573d32d9c9f",
          "url": "https://github.com/risc0/risc0/commit/d6e4d9123334a6ba4bf15069afb393d766067c7f"
        },
        "date": 1677283105099,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4714577439,
            "range": "± 870803224",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 9160589113,
            "range": "± 2440873306",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 3322153884,
            "range": "± 47394651",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1937212790,
            "range": "± 102655180",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}