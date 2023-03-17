window.BENCHMARK_DATA = {
  "lastUpdate": 1679090749020,
  "repoUrl": "https://github.com/risc0/risc0",
  "entries": {
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
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397640730,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2153390500,
            "range": "± 8548339",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2172853312,
            "range": "± 15670677",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779862499,
            "range": "± 694763",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780999874,
            "range": "± 1004211",
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
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399942886,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2185220708,
            "range": "± 23338607",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2181155604,
            "range": "± 10180747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779467354,
            "range": "± 1228157",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780275375,
            "range": "± 1739426",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678416519038,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2153750978,
            "range": "± 7302648",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2163491083,
            "range": "± 9900921",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779161583,
            "range": "± 1212723",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779984562,
            "range": "± 847022",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678480805061,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2154588541,
            "range": "± 9018316",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155437437,
            "range": "± 4201064",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778037812,
            "range": "± 1066240",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779307916,
            "range": "± 1269647",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "b2359edd83e2a2890752931d35c3509d253ff7f1",
          "message": "Add basic support, issue with hal held data",
          "timestamp": "2023-03-12T06:18:49Z",
          "tree_id": "82240e46971f80335fefbe12c880e040bd4eabab",
          "url": "https://github.com/risc0/risc0/commit/b2359edd83e2a2890752931d35c3509d253ff7f1"
        },
        "date": 1678602153086,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2169348937,
            "range": "± 14880158",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2152600708,
            "range": "± 9022190",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778783208,
            "range": "± 533045",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779409749,
            "range": "± 442618",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678602618281,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2174073208,
            "range": "± 18802121",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2171227499,
            "range": "± 19509889",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778736749,
            "range": "± 1129255",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779117124,
            "range": "± 1280717",
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
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678821012212,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2160441603,
            "range": "± 26055632",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2162026645,
            "range": "± 25559257",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778882041,
            "range": "± 944370",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 779967562,
            "range": "± 2452468",
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
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678909830546,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2156687541,
            "range": "± 9855799",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2155372125,
            "range": "± 20943219",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778438562,
            "range": "± 1417714",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778844000,
            "range": "± 1165898",
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
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926568934,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2158331166,
            "range": "± 15441839",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2154986999,
            "range": "± 7835828",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 778078104,
            "range": "± 743733",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778957312,
            "range": "± 967663",
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
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071135238,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2154611687,
            "range": "± 13952016",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2169123166,
            "range": "± 14839958",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 776805083,
            "range": "± 1352954",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 777603208,
            "range": "± 1369690",
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
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679076506901,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2163304062,
            "range": "± 8286395",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2168682083,
            "range": "± 8392283",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 776571645,
            "range": "± 1257742",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 777624020,
            "range": "± 708649",
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
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081840864,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 2162268187,
            "range": "± 13024852",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 2159501041,
            "range": "± 10469501",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 777628708,
            "range": "± 912186",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 778107875,
            "range": "± 766074",
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
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397637029,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 895698173,
            "range": "± 7362482",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 889253255,
            "range": "± 10524238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499520923,
            "range": "± 2742283",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 501868824,
            "range": "± 3529774",
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
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399904123,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886240833,
            "range": "± 26353644",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 931724837,
            "range": "± 49322426",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 535707502,
            "range": "± 40237549",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 519368858,
            "range": "± 10333293",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678416502374,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 891074745,
            "range": "± 7447543",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 893602242,
            "range": "± 9585044",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 501272655,
            "range": "± 7072715",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499809125,
            "range": "± 5414480",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678488938866,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 965613480,
            "range": "± 3943606",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 966595090,
            "range": "± 3394997",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 569290481,
            "range": "± 2399160",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 571199875,
            "range": "± 3846303",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678603083021,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886824408,
            "range": "± 10726703",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 884377272,
            "range": "± 5839622",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 498392566,
            "range": "± 3047795",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 498723528,
            "range": "± 3461517",
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
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678821004832,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886812998,
            "range": "± 7238689",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 897292492,
            "range": "± 16931678",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499907773,
            "range": "± 5822192",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 502564113,
            "range": "± 4340424",
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
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678912001563,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886943180,
            "range": "± 8480018",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 893289288,
            "range": "± 6809278",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499135988,
            "range": "± 2604548",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499667388,
            "range": "± 2431520",
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
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926559629,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 885035654,
            "range": "± 5783112",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 893754463,
            "range": "± 8159708",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499516792,
            "range": "± 2913384",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 500947317,
            "range": "± 3097707",
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
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071147160,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 886450658,
            "range": "± 4792394",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 894975305,
            "range": "± 9637197",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 501974855,
            "range": "± 10535075",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 499103366,
            "range": "± 2843361",
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
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679077558700,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 890742694,
            "range": "± 7383265",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 896375650,
            "range": "± 5219633",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 502198386,
            "range": "± 6534619",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 500197601,
            "range": "± 4245150",
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
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081836924,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 887134351,
            "range": "± 6003478",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 889663429,
            "range": "± 6873245",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 499960175,
            "range": "± 2872704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 506049393,
            "range": "± 4880824",
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
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397639188,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1597643640,
            "range": "± 4644587",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592710456,
            "range": "± 18054369",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 467218014,
            "range": "± 1588238",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 469248176,
            "range": "± 1711201",
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
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399918460,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1599079356,
            "range": "± 7221273",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592351607,
            "range": "± 4051493",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 468105869,
            "range": "± 1084833",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 471674395,
            "range": "± 9273312",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678416523378,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1605444457,
            "range": "± 9489804",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1592092861,
            "range": "± 4237646",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 466506809,
            "range": "± 5949905",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 468240246,
            "range": "± 1534374",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678481338303,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3430658407,
            "range": "± 15512354",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3418766001,
            "range": "± 14604522",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1602405349,
            "range": "± 8037937",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1586837517,
            "range": "± 4739534",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "b2359edd83e2a2890752931d35c3509d253ff7f1",
          "message": "Add basic support, issue with hal held data",
          "timestamp": "2023-03-12T06:18:49Z",
          "tree_id": "82240e46971f80335fefbe12c880e040bd4eabab",
          "url": "https://github.com/risc0/risc0/commit/b2359edd83e2a2890752931d35c3509d253ff7f1"
        },
        "date": 1678602660190,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3449549696,
            "range": "± 18593127",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3429244311,
            "range": "± 9392751",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1588318571,
            "range": "± 6606880",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1604728582,
            "range": "± 7095226",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678603140317,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3424822669,
            "range": "± 22039159",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3405660199,
            "range": "± 19314750",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1587495263,
            "range": "± 3882747",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1591821503,
            "range": "± 8782205",
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
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678821108693,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3421376120,
            "range": "± 14081313",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3420657291,
            "range": "± 10685593",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1578526983,
            "range": "± 5226247",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1582484033,
            "range": "± 10105272",
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
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678910121936,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3461069900,
            "range": "± 24798167",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3444914693,
            "range": "± 14713684",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1601071340,
            "range": "± 12614547",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1604129773,
            "range": "± 5763054",
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
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926646033,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3457480689,
            "range": "± 27605135",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3433606262,
            "range": "± 6573508",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1588438716,
            "range": "± 4569042",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1586501954,
            "range": "± 10171888",
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
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071597745,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3438241784,
            "range": "± 14294568",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3440865488,
            "range": "± 13974142",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1606314624,
            "range": "± 12701657",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1601599324,
            "range": "± 7660720",
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
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679076605873,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3390854328,
            "range": "± 22876801",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3389661829,
            "range": "± 15374122",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1562824632,
            "range": "± 7299604",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1574009733,
            "range": "± 6006938",
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
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081957101,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 3391393128,
            "range": "± 16531675",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 3400528541,
            "range": "± 13482347",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 1584576849,
            "range": "± 9542871",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 1590164199,
            "range": "± 7725138",
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
          "id": "df3727649b47ed2a939d2213716907eebe3bb84f",
          "message": "Require docs for `risc0-core` (#429)\n\nAnd write the required docs",
          "timestamp": "2023-03-09T13:30:48-08:00",
          "tree_id": "fa5e33685cd27e9cb27519b262ec324833d68ffb",
          "url": "https://github.com/risc0/risc0/commit/df3727649b47ed2a939d2213716907eebe3bb84f"
        },
        "date": 1678397607263,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150679291,
            "range": "± 5442384",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1150125749,
            "range": "± 6023275",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780756895,
            "range": "± 1074704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782257603,
            "range": "± 1147722",
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
          "id": "a1888a431f2af188dc9e3b941a7954b30f87bbfe",
          "message": "Document that journal is written by commit (#430)",
          "timestamp": "2023-03-09T14:08:45-08:00",
          "tree_id": "5aae5b9a38a557c269cbf86e8383e19a142ee14e",
          "url": "https://github.com/risc0/risc0/commit/a1888a431f2af188dc9e3b941a7954b30f87bbfe"
        },
        "date": 1678399961491,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150863812,
            "range": "± 6052012",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151539479,
            "range": "± 3191519",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780375833,
            "range": "± 800320",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781555687,
            "range": "± 551960",
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
          "id": "845ff76d621aee56d9688e9eb4b1e37dcb6ee772",
          "message": "Have cuda hal fall back to CPU for Poseidon support. (#432)\n\n* Work around lack of cuda poseidon for now",
          "timestamp": "2023-03-09T18:45:32-08:00",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/845ff76d621aee56d9688e9eb4b1e37dcb6ee772"
        },
        "date": 1678480780957,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1153579478,
            "range": "± 5376379",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1154288020,
            "range": "± 4132309",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781538937,
            "range": "± 922709",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782561916,
            "range": "± 2085766",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "b2359edd83e2a2890752931d35c3509d253ff7f1",
          "message": "Add basic support, issue with hal held data",
          "timestamp": "2023-03-12T06:18:49Z",
          "tree_id": "82240e46971f80335fefbe12c880e040bd4eabab",
          "url": "https://github.com/risc0/risc0/commit/b2359edd83e2a2890752931d35c3509d253ff7f1"
        },
        "date": 1678602104080,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1154176312,
            "range": "± 4850980",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1153416354,
            "range": "± 5505200",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780892541,
            "range": "± 774406",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781807958,
            "range": "± 422148",
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
            "email": "jeremy@risczero.com",
            "name": "Jeremy Bruestle",
            "username": "jbruestle"
          },
          "distinct": true,
          "id": "6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376",
          "message": "Revert \"Add basic support, issue with hal held data\"\n\nThis reverts commit b2359edd83e2a2890752931d35c3509d253ff7f1.",
          "timestamp": "2023-03-12T06:26:47Z",
          "tree_id": "b85479418351ad84f90e624a3aaa51de25c83039",
          "url": "https://github.com/risc0/risc0/commit/6b6e7e0ade56e5c8c2b1f11cb47b19a33b339376"
        },
        "date": 1678654652653,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1155088520,
            "range": "± 4292439",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1156344062,
            "range": "± 7130117",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781695479,
            "range": "± 812066",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782910937,
            "range": "± 1023991",
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
          "id": "6ff13814c59b934ab8d4a2556add49946c92503e",
          "message": "Guest I/O, now with posix style! (#426)\n\nAdd posix-style I/O, with byte-aligned read and write.\r\nGet rid of \"channels\"; we now have syscalls and file descriptors.\r\nSyscalls are now named to avoid numbering conflicts. (All the string handling is done in the host, so negligible performance impact)\r\nCombined several of the syscall asm! wrappers; we now have \"syscall_0\" through \"syscall_5\" for different number of arguments\r\nGet rid of SYS_STDOUT and SYS_STDERR, and SYS_JOURNAL; these are now handled by file descriptors 1, 2, and 3\r\nStill todo: Get rid of INITIAL_INPUT and replace with reading from stdin.",
          "timestamp": "2023-03-14T19:07:04Z",
          "tree_id": "3c5d116c942a35c3c8855463b01a34f03574ab60",
          "url": "https://github.com/risc0/risc0/commit/6ff13814c59b934ab8d4a2556add49946c92503e"
        },
        "date": 1678820993000,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1152288479,
            "range": "± 5265828",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151518229,
            "range": "± 3564168",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779994478,
            "range": "± 866420",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780646791,
            "range": "± 545942",
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
          "id": "b53a9c3603c3498c25d9decc5750ebed6b2aeca1",
          "message": "Added pull-req perms for comment creation (#440)",
          "timestamp": "2023-03-15T12:47:19-07:00",
          "tree_id": "03de8d19697d446261c31957bb6fbb3729c84c1c",
          "url": "https://github.com/risc0/risc0/commit/b53a9c3603c3498c25d9decc5750ebed6b2aeca1"
        },
        "date": 1678909802424,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1146958500,
            "range": "± 11100207",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1152922728,
            "range": "± 5795797",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 779752145,
            "range": "± 795976",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781066020,
            "range": "± 1300062",
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
          "id": "62ad726d2137eb930bd98c758337b20690c52b80",
          "message": "Add additional perms for PR comments (#442)",
          "timestamp": "2023-03-15T17:26:03-07:00",
          "tree_id": "367e37e859a470b1b39aff1a3cc9aecae44213f9",
          "url": "https://github.com/risc0/risc0/commit/62ad726d2137eb930bd98c758337b20690c52b80"
        },
        "date": 1678926530935,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1149197374,
            "range": "± 3277279",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1154787708,
            "range": "± 4519573",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780348687,
            "range": "± 1561465",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 780890645,
            "range": "± 901334",
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
          "id": "a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481",
          "message": "Partial experimental preflight implementation for riscv32im (#447)\n\nSelect this experimental mode by setting the RISC0_EXPERIMENTAL_PREFLIGHT envornment variable or by using ProverOpts::with_preflight\r\n\r\nPreflight does not yet generate all the data needed to generate a full circuit execution trace, so currently only works when skip_seal is specified.\r\n\r\nAll of the risc0-zkvm tests pass in preflight mode, except for the ones which depend on exact cycle counts or on execution tracing/profiling.\r\n\r\nCo-authored-by: nils <shkoo@users.noreply.github.com>",
          "timestamp": "2023-03-17T09:35:37-07:00",
          "tree_id": "26e5578f4bf237bb4c4a0389dd63ecde1944f979",
          "url": "https://github.com/risc0/risc0/commit/a646ebe5963aa19c2bb3f2fcc46e68ab6aee8481"
        },
        "date": 1679071118353,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1154189041,
            "range": "± 9053855",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1153209520,
            "range": "± 7516182",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 781563458,
            "range": "± 838539",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782087437,
            "range": "± 618089",
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
          "id": "a34db968eca59a39d2480530f993ede3a3a191f6",
          "message": "zkvm: add guest support for getrandom (#445)\n\nThis provides a zkvm with the getrandom functionality builtin to the guest\r\ncrate. This allows the guest to use the getrandom crate without any\r\ncustomization.",
          "timestamp": "2023-03-17T18:05:22Z",
          "tree_id": "d623b1e36da343eeaa6540bad75634660684158e",
          "url": "https://github.com/risc0/risc0/commit/a34db968eca59a39d2480530f993ede3a3a191f6"
        },
        "date": 1679076478739,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1150004229,
            "range": "± 5877367",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151934145,
            "range": "± 9437850",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780430124,
            "range": "± 891859",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 781249249,
            "range": "± 2095519",
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
          "id": "09401c95e9075417212d6fdf6b22159f256df11e",
          "message": "Breaks up benchmark PR workflow (#446)\n\nAllows for forked repo PRs to run bench_pr workflow while not\r\nexposing the GITHUB_TOKEN to malicious workflows.",
          "timestamp": "2023-03-17T12:34:03-07:00",
          "tree_id": "aa6472c6cad82cf8a49e6cbc9ef36585fc879dc9",
          "url": "https://github.com/risc0/risc0/commit/09401c95e9075417212d6fdf6b22159f256df11e"
        },
        "date": 1679081824407,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1153476228,
            "range": "± 5502682",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1151696604,
            "range": "± 6445452",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 780914645,
            "range": "± 2246615",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 782048666,
            "range": "± 1178697",
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
          "id": "8efc329caf24e647cc82fcb2d806190dc1e11695",
          "message": "Split core zkp kernels and rv32im kernel into seperate sys crates (#449)\n\nSplit core zkp kernels and rv32im kernel into seperate sys crates",
          "timestamp": "2023-03-17T15:02:59-07:00",
          "tree_id": "796b860064e1078ed2de6ed22158fd48f29d8526",
          "url": "https://github.com/risc0/risc0/commit/8efc329caf24e647cc82fcb2d806190dc1e11695"
        },
        "date": 1679090747723,
        "tool": "cargo",
        "benches": [
          {
            "name": "fib/100/proof",
            "value": 1155589520,
            "range": "± 6611704",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/proof",
            "value": 1156181124,
            "range": "± 5444515",
            "unit": "ns/iter"
          },
          {
            "name": "fib/100/run",
            "value": 782209687,
            "range": "± 734656",
            "unit": "ns/iter"
          },
          {
            "name": "fib/200/run",
            "value": 783075479,
            "range": "± 433351",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}