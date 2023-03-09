window.BENCHMARK_DATA = {
  "lastUpdate": 1678384053288,
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
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677635596845,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2766617790,
            "range": "± 12164934",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2768851477,
            "range": "± 7763465",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069465472,
            "range": "± 8051353",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1066068314,
            "range": "± 6773554",
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
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677641909260,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2771989106,
            "range": "± 9110804",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2770629759,
            "range": "± 9035488",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1062178991,
            "range": "± 5416323",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1062280356,
            "range": "± 3152359",
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
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677733157653,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2764868038,
            "range": "± 14894695",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2760397373,
            "range": "± 24137717",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1068754091,
            "range": "± 5452610",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1068246527,
            "range": "± 5243499",
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
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677785118710,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2784390063,
            "range": "± 9478773",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2780626700,
            "range": "± 10733229",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1065534465,
            "range": "± 8001532",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1068403865,
            "range": "± 8478501",
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
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677635250918,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3850701759,
            "range": "± 32647009",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3850991470,
            "range": "± 30198745",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1075193014,
            "range": "± 15648613",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1082983756,
            "range": "± 12556455",
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
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677641892662,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3849867439,
            "range": "± 21910047",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3883057258,
            "range": "± 30305433",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1089322764,
            "range": "± 8990610",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1077353305,
            "range": "± 9298263",
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
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677733137808,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3859902326,
            "range": "± 32409020",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3873692431,
            "range": "± 21213050",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1074834408,
            "range": "± 12618801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1076852800,
            "range": "± 11534457",
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
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677785121386,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3937935418,
            "range": "± 50437899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3998015099,
            "range": "± 21384911",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1069570573,
            "range": "± 4087631",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1066830199,
            "range": "± 4423864",
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
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865760280,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2103521083,
            "range": "± 9225674",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2096751645,
            "range": "± 20875968",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 677720458,
            "range": "± 1229825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 678651437,
            "range": "± 848057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888422856,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2094572124,
            "range": "± 29835092",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2094355041,
            "range": "± 9765286",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 677628270,
            "range": "± 805555",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 678105166,
            "range": "± 933843",
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
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226370347,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2093771958,
            "range": "± 11305704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2087629791,
            "range": "± 10269102",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 676743812,
            "range": "± 1255195",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 677897374,
            "range": "± 515060",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312439667,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2105017166,
            "range": "± 30793605",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2102693541,
            "range": "± 5838811",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 677110583,
            "range": "± 1114162",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 677964854,
            "range": "± 852547",
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
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324739113,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2158632249,
            "range": "± 15835220",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155642999,
            "range": "± 10111048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777846353,
            "range": "± 1426576",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779701666,
            "range": "± 948038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384051957,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2165794145,
            "range": "± 14761687",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2159367312,
            "range": "± 11681167",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777574770,
            "range": "± 727580",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778816562,
            "range": "± 1290995",
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
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677630067188,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 838929177,
            "range": "± 6393825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 834044303,
            "range": "± 9590523",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 469536002,
            "range": "± 4291134",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 470919956,
            "range": "± 3734395",
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
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677640744660,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 870332560,
            "range": "± 9479902",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 869536105,
            "range": "± 11610635",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 500117769,
            "range": "± 3061500",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 498851293,
            "range": "± 3561502",
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
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677731983985,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 868014919,
            "range": "± 31679554",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 961620711,
            "range": "± 58972695",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 489600892,
            "range": "± 23251914",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 482260103,
            "range": "± 8560280",
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
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677784960449,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 853669091,
            "range": "± 8285825",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 846975818,
            "range": "± 10113019",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 467807449,
            "range": "± 2504244",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 469052773,
            "range": "± 4743066",
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
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865764485,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 848702829,
            "range": "± 10988045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 846461927,
            "range": "± 26167127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 483920864,
            "range": "± 6575718",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 482205540,
            "range": "± 6117440",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888418176,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 856838239,
            "range": "± 10388796",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 845700664,
            "range": "± 9131164",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 483918798,
            "range": "± 5824123",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 483469225,
            "range": "± 5649837",
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
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226363044,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 971095979,
            "range": "± 33011653",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 964409228,
            "range": "± 28546437",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 519236135,
            "range": "± 21177216",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 541163632,
            "range": "± 19007040",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312434729,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 900007271,
            "range": "± 26497367",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 929232069,
            "range": "± 50575573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499269815,
            "range": "± 16596735",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 507602784,
            "range": "± 24595101",
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
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324725895,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 893436410,
            "range": "± 10300680",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 894900132,
            "range": "± 11745878",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499857182,
            "range": "± 2827114",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 501748740,
            "range": "± 5814885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384043740,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 892780510,
            "range": "± 5302760",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 892973581,
            "range": "± 6659044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499027492,
            "range": "± 2197136",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499579883,
            "range": "± 5493039",
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
          "id": "ab59cee852a9cae2754e9b73313ad9a92ac1bcac",
          "message": "Remove FFPU (#397)\n\n* Remove FFPU from circuit\r\n* Remove FFPU builds of verification programs\r\n* Remove FFPU acceleration of baby bear ops\r\n* Remove host support for FFPU\r\n* Remove \"COMPUTE_POLY\" non-FFPU system call\r\n* Remove zkvm based recursion tests\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-01T00:11:29Z",
          "tree_id": "c6dae24dc388107db9703a6d125a71cdef1330bd",
          "url": "https://github.com/risc0/risc0/commit/ab59cee852a9cae2754e9b73313ad9a92ac1bcac"
        },
        "date": 1677629833160,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1615764015,
            "range": "± 9793142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1614351548,
            "range": "± 4785335",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 436660352,
            "range": "± 955244",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 440150477,
            "range": "± 1253651",
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
          "id": "450f5f717560a37dfd70f9f438cfd5a54374bb2f",
          "message": "address review comment on #403 (#408)",
          "timestamp": "2023-03-01T03:15:42Z",
          "tree_id": "ea8b5b37835b856d65dba709717e29bf196e5a1b",
          "url": "https://github.com/risc0/risc0/commit/450f5f717560a37dfd70f9f438cfd5a54374bb2f"
        },
        "date": 1677640735483,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1800718475,
            "range": "± 31045598",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1834995874,
            "range": "± 37680957",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 445417021,
            "range": "± 2386092",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 451606126,
            "range": "± 3864291",
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
          "id": "afacb28955036e13550dd45864baf0bc885edadd",
          "message": "Expand examples in documentation (#393)\n\n* WIP\r\n\r\n* Format\r\n\r\n* Re-add semantic newline\r\n\r\n* Fix mismatched initial hash data\r\n\r\n* WIP Receipt\r\n\r\n* Finish Receipt module examples\r\n\r\n* Add examples to prover Rust docs\r\n\r\n* Manually flatten fake journal\r\n\r\n* Revise `expect` text\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format/wordsmith\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Document Prover::cycles\r\n\r\n* Revise `run_with_hal` docs\r\n\r\n* Document `default_hal`\r\n\r\n* Clarify language documenting `Prover::run`\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Use more idiomatic array init\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Revise add_input_u8_slice docs\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>\r\n\r\n* Format & extend revisions to add_input_u8_slice\r\n\r\n* Format\r\n\r\n* Fully qualify to_vec in example\r\n\r\n* Discuss Err in functions not expects\r\n\r\n* Format\r\n\r\n* Add info on get_output_u32_vec Err\r\n\r\n* Add `receipt` module summary\r\n\r\n* Document `insecure_skip_seal`\r\n\r\n* Replace expect with ? in receipt docs\r\n\r\n* Revise receipt module docs\r\n\r\n* Document receipt verify functions\r\n\r\n* Document `Receipt::new`\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-01T20:36:54-08:00",
          "tree_id": "b02951844ef95be93e186772ba5039ede2f40d76",
          "url": "https://github.com/risc0/risc0/commit/afacb28955036e13550dd45864baf0bc885edadd"
        },
        "date": 1677732011976,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1806262870,
            "range": "± 17810201",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1821546820,
            "range": "± 35838011",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 447874055,
            "range": "± 7357595",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 443262631,
            "range": "± 7275919",
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
          "id": "3ab835053fdce0736939a85bb6a3dab086d64fa1",
          "message": "One comment per benchmark PR check. (#407)\n\n* Collect all bench_pr matrix outputs into 1 comment\r\n\r\nBy uploading all the markdown results as artifacts we can then gather\r\nthem into a single PR comment, per change\r\n\r\n* Update action dep commit hash\r\n\r\n* Update action dep\r\n\r\n* Fixed bench_pr github-script syntax err\r\n\r\n* Attempting to fix gh-action comment download step\r\n\r\n* Added bench workflows to path triggers\r\n\r\n* Fixed output typo\r\n\r\n* Add step id back for criterion-cmp\r\n\r\n* Move markdown out of variables\r\n\r\n* Fixed bash variable error\r\n\r\n* Fixed output_name assignment\r\n\r\n* Remove output_name var\r\n\r\n* Added shell for wildcard expansion\r\n\r\n* Added unzip step to create-comment job\r\n\r\n* Name downloaded artifact\r\n\r\n* artifact download fix path\r\n\r\n* Try something else\r\n\r\n* archive-download might create a directory not zip\r\n\r\n* Read Markdown as string not buffer\r\n\r\n* Deleted debugging action step\r\n\r\n* Updated crit-cmp back to main risc0 branch",
          "timestamp": "2023-03-02T11:19:47-08:00",
          "tree_id": "a621d127f584352fe136c6e6eeb831d75a79957a",
          "url": "https://github.com/risc0/risc0/commit/3ab835053fdce0736939a85bb6a3dab086d64fa1"
        },
        "date": 1677784979961,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1832788869,
            "range": "± 25506938",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1812553681,
            "range": "± 38653076",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 447440692,
            "range": "± 4877980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 446886914,
            "range": "± 5507673",
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
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865781249,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1810823464,
            "range": "± 24670596",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1810306142,
            "range": "± 44494582",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 443626653,
            "range": "± 3804307",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 446323626,
            "range": "± 4045051",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888443069,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1819038893,
            "range": "± 37739048",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1832794238,
            "range": "± 44103794",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 443795859,
            "range": "± 5420637",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 444366289,
            "range": "± 3093450",
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
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226382834,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1590460248,
            "range": "± 18505370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1590632783,
            "range": "± 6048054",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 441619454,
            "range": "± 1867239",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 443067186,
            "range": "± 1024318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312451297,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1580330728,
            "range": "± 5838507",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1582362036,
            "range": "± 9445643",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 431987988,
            "range": "± 1679713",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 434772884,
            "range": "± 2764090",
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
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324745107,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1604163760,
            "range": "± 6740925",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1593302396,
            "range": "± 4017805",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 479192595,
            "range": "± 1793016",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 481558533,
            "range": "± 2471962",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384038080,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1595399048,
            "range": "± 8186900",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1588884979,
            "range": "± 6347061",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 467675383,
            "range": "± 6560275",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 469000342,
            "range": "± 2529586",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "macOS-apple_m2_pro": [
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
          "id": "bd26be31369b409ebf86f58995c712a6c5cf7830",
          "message": "Use new m2 macs (#422)",
          "timestamp": "2023-03-03T09:45:52-08:00",
          "tree_id": "20c91d7afe7bb7c1266c532241dfb0de338b6b6a",
          "url": "https://github.com/risc0/risc0/commit/bd26be31369b409ebf86f58995c712a6c5cf7830"
        },
        "date": 1677865810349,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1026727562,
            "range": "± 8352776",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1025539208,
            "range": "± 4130899",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 678795270,
            "range": "± 560086",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 679465124,
            "range": "± 677639",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3e18632a529289a8f84b3fcd0dface7255dd7bb",
          "message": "Change RNG semantics to help Poseidon. (#421)",
          "timestamp": "2023-03-03T16:03:38-08:00",
          "tree_id": "7102b4d145af9197e60714db94e0efdecdc06a21",
          "url": "https://github.com/risc0/risc0/commit/e3e18632a529289a8f84b3fcd0dface7255dd7bb"
        },
        "date": 1677888392792,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1029713166,
            "range": "± 5856854",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1025629833,
            "range": "± 9234965",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 679204395,
            "range": "± 1662020",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 680374916,
            "range": "± 1665965",
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
          "id": "8e448406f7af9939c3fb658333177091c865ffab",
          "message": "Full documentation for `risc0_zkvm` (#425)\n\nTurn on `deny(missing_docs)` for the `risc0_zkvm` crate, and document everything required by this.\r\n\r\n---------\r\n\r\nCo-authored-by: Frank Laub <flaub@risc0.com>",
          "timestamp": "2023-03-07T13:56:26-08:00",
          "tree_id": "7a75a5cfc6860c5cac16479dbf3fcc2310a7a911",
          "url": "https://github.com/risc0/risc0/commit/8e448406f7af9939c3fb658333177091c865ffab"
        },
        "date": 1678226338834,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1026259458,
            "range": "± 10759646",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1026832562,
            "range": "± 5910823",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 679019270,
            "range": "± 1121148",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 680188895,
            "range": "± 1200412",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cd443722e7941a7884476a4bc4a9fc4512572c",
          "message": "Fix a poseidon bug (#427)",
          "timestamp": "2023-03-08T14:50:46-07:00",
          "tree_id": "1619c3e38c293d4934384407090952eb019afdf0",
          "url": "https://github.com/risc0/risc0/commit/25cd443722e7941a7884476a4bc4a9fc4512572c"
        },
        "date": 1678312409998,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1024316749,
            "range": "± 4159909",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1026381541,
            "range": "± 5689380",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 679249291,
            "range": "± 809528",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 680288583,
            "range": "± 468511",
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
          "id": "3ba2289b75d2d7dcea730b245a9395cc12839b88",
          "message": "Drop INPUT region (#428)",
          "timestamp": "2023-03-09T01:15:58Z",
          "tree_id": "797ff7f44a9bddcab67dfc0f9c8c03ac102a25ae",
          "url": "https://github.com/risc0/risc0/commit/3ba2289b75d2d7dcea730b245a9395cc12839b88"
        },
        "date": 1678324717078,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1153322187,
            "range": "± 5883618",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1158878854,
            "range": "± 4943085",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 782208208,
            "range": "± 658971",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782688104,
            "range": "± 774227",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erik@risczero.com",
            "name": "Erik Kaneda",
            "username": "SchmErik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "031af9754b667e905ea52b10792a4543f54f1b77",
          "message": "zkvm: add sys_rand to generate random numbers for the guest (#389)\n\nThe sys_rand wrapper will generate `n` words of random numbers using SYS_IO and a new `SENDRECV_CHANNEL_RANDOM` channel.",
          "timestamp": "2023-03-09T17:44:08Z",
          "tree_id": "0f19eb4998e2ff23757256058ae0e1dbc2e6957d",
          "url": "https://github.com/risc0/risc0/commit/031af9754b667e905ea52b10792a4543f54f1b77"
        },
        "date": 1678384028973,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150062958,
            "range": "± 5981922",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1149848062,
            "range": "± 6548000",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779453124,
            "range": "± 1100647",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780719208,
            "range": "± 852296",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}