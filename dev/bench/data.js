window.BENCHMARK_DATA = {
  "lastUpdate": 1677550654069,
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
        "date": 1677520062331,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2961152326,
            "range": "± 7751635",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2951900701,
            "range": "± 6776865",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1071237482,
            "range": "± 3775186",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1073317761,
            "range": "± 4478536",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677529218785,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2947956400,
            "range": "± 10549015",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2986459311,
            "range": "± 33179316",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1078189964,
            "range": "± 10809726",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1069784944,
            "range": "± 8257513",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538899567,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2949005963,
            "range": "± 8285624",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2958189757,
            "range": "± 7004868",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1077446470,
            "range": "± 7041553",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1077096129,
            "range": "± 3984465",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677541712697,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2945748609,
            "range": "± 5808677",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2944701768,
            "range": "± 20107221",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1074537956,
            "range": "± 8514156",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1069411776,
            "range": "± 8527834",
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
        "date": 1677520143723,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4174493999,
            "range": "± 39255015",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4172946354,
            "range": "± 126894304",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1087556005,
            "range": "± 24754348",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1065274687,
            "range": "± 14397855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677528925594,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4212826687,
            "range": "± 66726237",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4279462113,
            "range": "± 49615495",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069173154,
            "range": "± 5927511",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1072754720,
            "range": "± 7408604",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538909511,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4395397223,
            "range": "± 27776414",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4404124642,
            "range": "± 27107440",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1324585579,
            "range": "± 8887954",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1324504471,
            "range": "± 6541762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677541720721,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 4274387790,
            "range": "± 47270329",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 4306901057,
            "range": "± 80406957",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1072488557,
            "range": "± 5649175",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1070901373,
            "range": "± 3589585",
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
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677527331143,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 849685361,
            "range": "± 6246800",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 858889559,
            "range": "± 7568452",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 469658253,
            "range": "± 4157642",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 477625676,
            "range": "± 4758843",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538313912,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 847635602,
            "range": "± 9652719",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 853421361,
            "range": "± 7710155",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 470827316,
            "range": "± 1897735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 470902753,
            "range": "± 3267791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677541752857,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 848913532,
            "range": "± 9514598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 850582508,
            "range": "± 6196730",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 471158171,
            "range": "± 3315530",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 471667268,
            "range": "± 4029937",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e703fb127398c84db67335ed63b8d0bfb637f2f",
          "message": "Update logo (#411)",
          "timestamp": "2023-02-28T02:09:24Z",
          "tree_id": "7c4876838b25dbb87891f832d4dc8b471c2aee28",
          "url": "https://github.com/risc0/risc0/commit/9e703fb127398c84db67335ed63b8d0bfb637f2f"
        },
        "date": 1677550653284,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 848238475,
            "range": "± 6156546",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 848339464,
            "range": "± 6018347",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 472168859,
            "range": "± 3735570",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 473557021,
            "range": "± 2614798",
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
        "date": 1677519868249,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 6492133204,
            "range": "± 2832728048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 7716126717,
            "range": "± 3501390652",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1782113682,
            "range": "± 87743625",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 2072749836,
            "range": "± 482290203",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adfea4309cd0a1fa8e7b9772bcd9ce501bebd195",
          "message": "Restrict benchmarks to bench machines (#404)",
          "timestamp": "2023-02-27T19:35:32Z",
          "tree_id": "5414713b64927a80645a780f4be20595ee903622",
          "url": "https://github.com/risc0/risc0/commit/adfea4309cd0a1fa8e7b9772bcd9ce501bebd195"
        },
        "date": 1677537261713,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1029925993,
            "range": "± 5531193",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1031221826,
            "range": "± 4368449",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 337905769,
            "range": "± 2910800",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 337546836,
            "range": "± 1853366",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nategraf1@gmail.com",
            "name": "Victor Graf",
            "username": "nategraf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49c3a64e11b9f32ab5b1aed7cd3bd552173e464b",
          "message": "Add starter template for Bonsai applications (#403)",
          "timestamp": "2023-02-27T22:36:57Z",
          "tree_id": "98388d0b35c5410d227912c0708becbd901f23a2",
          "url": "https://github.com/risc0/risc0/commit/49c3a64e11b9f32ab5b1aed7cd3bd552173e464b"
        },
        "date": 1677538011295,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2049480733,
            "range": "± 1075497339",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1648595601,
            "range": "± 194858597",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 391986837,
            "range": "± 42206559",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 374235576,
            "range": "± 22721806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "flaub@risc0.com",
            "name": "Frank Laub",
            "username": "flaub"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e680f8df584ca5f971cff3e1cc2bec577739b777",
          "message": "Drop vulnerable remove_dir_all dep (#405)",
          "timestamp": "2023-02-27T23:32:10Z",
          "tree_id": "ad15f4810a304baf91f0e6e6c955a850727dbeb4",
          "url": "https://github.com/risc0/risc0/commit/e680f8df584ca5f971cff3e1cc2bec577739b777"
        },
        "date": 1677540948773,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1808960825,
            "range": "± 307003454",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1574023882,
            "range": "± 312976488",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 359376546,
            "range": "± 12971882",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 357648097,
            "range": "± 9331355",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tim.zerrell@risczero.com",
            "name": "Tim Zerrell",
            "username": "tzerrell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e703fb127398c84db67335ed63b8d0bfb637f2f",
          "message": "Update logo (#411)",
          "timestamp": "2023-02-28T02:09:24Z",
          "tree_id": "7c4876838b25dbb87891f832d4dc8b471c2aee28",
          "url": "https://github.com/risc0/risc0/commit/9e703fb127398c84db67335ed63b8d0bfb637f2f"
        },
        "date": 1677550556419,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1973989749,
            "range": "± 39254688",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1940984001,
            "range": "± 36893379",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 446397180,
            "range": "± 4886753",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 446998937,
            "range": "± 5100331",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}