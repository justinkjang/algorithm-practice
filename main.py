#BOJ 1002 터렛

import math

t = int(input())

for _ in range(t):
  x1, y1, r1, x2, y2, r2 = map(int, input().split())

  d = math.sqrt((x1-x2)**2 + (y1-y2)**2)

  # 중심 같은경우
  if d == 0:
    if r1 == r2:
      print(-1)
    else:
      print(0)

  #중심 같은경우
  else:
    if r1 + r2 == d or abs(r1 - r2) == d: #abs = 절대값
      print(1)
    elif abs(r1-r2) < d and r1+r2 > d:
      print(2)
    else:
      print(0)