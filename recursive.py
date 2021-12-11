#BOJ 10872  팩토리얼

def factorial(n):
  result=1
  if n > 0:
    result = n * factorial(n-1)
  return result

n = int(input())
print(factorial(n))


#BOJ 10870 피보나치 수 5

def f(n):
  if n <= 1:
    return n
  else:
    return f(n-1)+f(n-2)

n = int(input())
print(f(n))


#BOJ 2447 별찍기 - 10

n=int(input())

def recursion(n):
  if n == 1:
    return['*']
  
  star_group = recursion(n//3)
  arr = []

  for star in star_group:
    arr.append(star * 3)
  for star in star_group:
    arr.append(star + ' '*(n//3) + star)
  for star in star_group:
    arr.append(star * 3)
  
  return arr

print('\n'.join(recursion(n)))


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