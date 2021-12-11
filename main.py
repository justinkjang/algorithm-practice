#BOJ 11729 하노이탑

# a = 시작
# b = 목표
# 6-a-b = 보조

def hanoi(n, start, end):
  sub = 6 - start - end
  if n > 1:
    hanoi(n-1, start, sub)
  print(start, end)
  if n > 1:
    hanoi(n-1, sub, end)
  
n = int(input())
print(2**n-1)
hanoi(n, 1, 3)