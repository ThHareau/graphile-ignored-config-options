## Bug

Steps to reproduce: 

```bash
npm run enqueue
npm run enqueue
npm run worker -- --once
# Should take about 4 seconds, notice that both jobs are run sequentially
```


## Expected

```bash
npm run enqueue
npm run enqueue
npm run worker -- -j 2 -m 2 --once
# Should take about 2 seconds, notice that both jobs are run in parallel
```
