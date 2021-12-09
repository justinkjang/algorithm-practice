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