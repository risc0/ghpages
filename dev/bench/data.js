window.BENCHMARK_DATA = {
  "lastUpdate": 1677519750807,
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
        "date": 1677283457910,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2848667678,
            "range": "± 6578769",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2847567322,
            "range": "± 6826272",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1075812530,
            "range": "± 4427980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1071107099,
            "range": "± 4472001",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kuba.plaskonka@gmail.com",
            "name": "Kuba Płaskonka",
            "username": "kubaplas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b",
          "message": "Using Blake2b as a hash function (#401)",
          "timestamp": "2023-02-25T11:28:56-08:00",
          "tree_id": "1703efd636c4bcb4944b3702d306432b4842bf20",
          "url": "https://github.com/risc0/risc0/commit/d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b"
        },
        "date": 1677354605205,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2840841574,
            "range": "± 8966612",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2841374470,
            "range": "± 9234674",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1073631559,
            "range": "± 5303154",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1075896683,
            "range": "± 5205379",
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
      },
      {
        "commit": {
          "author": {
            "email": "kuba.plaskonka@gmail.com",
            "name": "Kuba Płaskonka",
            "username": "kubaplas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b",
          "message": "Using Blake2b as a hash function (#401)",
          "timestamp": "2023-02-25T11:28:56-08:00",
          "tree_id": "1703efd636c4bcb4944b3702d306432b4842bf20",
          "url": "https://github.com/risc0/risc0/commit/d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b"
        },
        "date": 1677354598445,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4013681209,
            "range": "± 50570361",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4049967478,
            "range": "± 37433892",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1078328273,
            "range": "± 12517729",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1074277482,
            "range": "± 11034495",
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
      },
      {
        "commit": {
          "author": {
            "email": "kuba.plaskonka@gmail.com",
            "name": "Kuba Płaskonka",
            "username": "kubaplas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b",
          "message": "Using Blake2b as a hash function (#401)",
          "timestamp": "2023-02-25T11:28:56-08:00",
          "tree_id": "1703efd636c4bcb4944b3702d306432b4842bf20",
          "url": "https://github.com/risc0/risc0/commit/d23cb57039e09f2fc8457cc7f1e6d9b052f2c60b"
        },
        "date": 1677354143430,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 846683882,
            "range": "± 10106094",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 852615220,
            "range": "± 7661249",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 471512443,
            "range": "± 4726019",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 475238093,
            "range": "± 3465319",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nils@risczero.com",
            "name": "shkoo",
            "username": "shkoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e552494ff836ab2fe24a597c8e6db095dc87020a",
          "message": "Add \"copy-in\" to rv32 circuit (#390)\n\n* Add \"copy-in\" to rv32 circuit\r\n\r\n* New major cycle type copies in data from the host at 4 words per cycle\r\n* SOFTWARE ecall type now takes:\r\n     a0: destination buffer pointer\r\n     a1: destination size in chunks (words / 4, bytes / 16)\r\n  and can modify a0 and a1 to return data in registers.\r\n  It uses the COPY_IN cycle, and calls the following externs:\r\n    syscall-init: Tells the host to start a syscall\r\n    syscall-body: Gather the next 4 words to transfer from the host to the guest\r\n    syscall-fini: Gather the 2 register outputs from the host\r\n* SYS_IO takes the following additional args:\r\n     a2: source buffer pointer\r\n     a3: source buffer size in bytes\r\n     a4: channel id\r\n  SYS_IO returns arbitrary data from the host in a0 and a1 for data that's small enough to not need a buffer allocated.  (This matches return values in the riscv calling conventions to minimize overhead)\r\n* Removed SYS_COMPUTE_POLY; functionality replaced by SENDRECV_CHANNEL_COMPUTE_POLY via SYS_IO  (Hopefully we can eventually get rid of this)\r\n* Removed SYS_COMMIT; functionality replaced by SENDRECV_CHANNEL_COMMIT via SYS_IO\r\n* Updated guest::env for new SYS_IO API\r\n\r\n* Add test to make sure eval_check doesn't grow unexpectedly\r\n\r\n* Update sendrecv api\r\n\r\n* Change copy-in to be able to copy arbitrary number of words\r\n\r\nIn contrast to only being able to copy multiples of 4 words.\r\n\r\n* Separate send_recv guest API into send_recv_raw and send_recv_slice\r\n\r\nThis seems cleaner and less confusing to me.\r\n\r\n* Update sendrecv api in waldo example\r\n\r\n---------\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-02-27T09:26:16-08:00",
          "tree_id": "78f8ebc64a28721478515b7e272c1916ef050867",
          "url": "https://github.com/risc0/risc0/commit/e552494ff836ab2fe24a597c8e6db095dc87020a"
        },
        "date": 1677519749585,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 849715744,
            "range": "± 7635864",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 850366860,
            "range": "± 8183606",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 470688349,
            "range": "± 4159680",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 470685781,
            "range": "± 3581570",
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