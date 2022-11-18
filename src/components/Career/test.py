Y1=2.5
V1=1.5
q=Y1*V1
def F(Y):
    return(Y1+q*2/(2*9.81*Y1**2)-Y-q**2/(2*9.81*Y*2))
def der(F,Y):
    DY=0.000000001
    return((F(Y+DY)-F(Y))/DY)
def f(Y):
    eps=0.000000001
    YP=Y+1
    while abs(YP-Y)>eps:
        YP=Y
        Y=Y-F(Y)/der(F,Y)
    return (Y)