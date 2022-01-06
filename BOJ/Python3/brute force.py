#BOJ 2798 JACK

n,m = map(int, input().split())
cards = list(map(int, input().split()))
candidate=0

for i in range(n):
  for j in range(i+1, n):
    for k in range(j+1, n):
      a = cards[i] + cards[j] + cards[k]
      if a <= m:
        candidate = max(candidate, a)

print(candidate)