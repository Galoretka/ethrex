window.BENCHMARK_DATA = {
  "lastUpdate": 1755680572916,
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
      }
    ]
  }
}