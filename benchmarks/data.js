window.BENCHMARK_DATA = {
  "lastUpdate": 1759161644384,
  "repoUrl": "https://github.com/Galoretka/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "72628438+avilagaston9@users.noreply.github.com",
            "name": "Avila Gastón",
            "username": "avilagaston9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da96b3878ff45cb8a1789f0a52124ec624fa4e38",
          "message": "refactor(l2): remove WrappedTransaction (#3984)\n\n**Motivation**\n\n`WrappedTransaction` is an abstraction that is not really necessary. We\ncan use `GenericTransaction` instead, which serves a similar purpose but\nis easier to manipulate, as we don't have to match Enum variants to\naccess its attributes.\n\n**Description**\n\n- Removes `WrappedTransaction`.\n- Updates all `WrappedTransaction` related functions (send,bump) to use\n`GenericTransactions` instead.\n- Implements mapper functions to convert a `GenericTransaction` to a\nspecific transaction type.\n- Replaces `build_eipxxx`/`send_eipxxx` functions with generic ones:\n`build_generic_tx(type)`/`send_generic_tx()`.\n\nCloses #3787\n\n---------\n\nCo-authored-by: Manuel Iñaki Bilbao <manuel.bilbao@lambdaclass.com>",
          "timestamp": "2025-08-19T23:26:47Z",
          "tree_id": "ccbe706b9e892b782a083e1f3d6a4e1fc9c5ef6d",
          "url": "https://github.com/Galoretka/ethrex/commit/da96b3878ff45cb8a1789f0a52124ec624fa4e38"
        },
        "date": 1755680570393,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 161786034245,
            "range": "± 325410440",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigooliveri10@gmail.com",
            "name": "Rodrigo Oliveri",
            "username": "rodrigo-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "448cab70ba986af5377347c61f434447b9de7b0c",
          "message": "chore(l1): reduce range of account request to reduce memory overhead (#4584)\n\n**Motivation**\n\nReduce memory usage by reducing the chunks\n\n**Description**\n\nIt just reduce the calculation for file size to 128MB instead of 512MB",
          "timestamp": "2025-09-23T20:08:09Z",
          "tree_id": "6c9cbf7c3400bb2b597ad8a9e35b638f97146b7d",
          "url": "https://github.com/Galoretka/ethrex/commit/448cab70ba986af5377347c61f434447b9de7b0c"
        },
        "date": 1758705967293,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 89089227495,
            "range": "± 149909201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39842759+gianbelinche@users.noreply.github.com",
            "name": "Gianbelinche",
            "username": "gianbelinche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9882b16c55cf9c8505eaeea84fb3f9c1c914304",
          "message": "feat(l1,l2,replay): mempool max size parameter (#4639)\n\n**Motivation**\nWe want to make the mempool max size a parameter\n<!-- Why does this pull request exist? What are its goals? -->\n\n**Description**\nAdds the mempool max size as a parameter to ethrex command\n<!-- A clear and concise general description of the changes this PR\nintroduces -->\n\n<!-- Link to issues: Resolves #111, Resolves #222 -->\n\nCloses https://github.com/lambdaclass/ethrex/issues/4600",
          "timestamp": "2025-09-29T14:54:10Z",
          "tree_id": "55c15009d246b4a4f39e0b9f50f6ce0d3f79e835",
          "url": "https://github.com/Galoretka/ethrex/commit/c9882b16c55cf9c8505eaeea84fb3f9c1c914304"
        },
        "date": 1759161642462,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 89139444723,
            "range": "± 177034386",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}