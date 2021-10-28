#pythonda kolkulator yasashga qaror qildim
import math


def sort_qilamiz(a):
    yang_list = []
    while a:
        eng_kich = a[0]
        for i in a:
            if i>eng_kich:
                eng_kich=i
        yang_list.append(eng_kich)
        a.remove(eng_kich)
    return(yang_list)
v = [9, 6, 3, 8, 2999, 456, 6786, 3453, 1, 0, -1, -54, -345345]
s = [8, 6, 7, -345, 67, 90]
print()

def ekub(son1, son2):
    sonlar = []
    if son1 > son2:
        sonlar.append(son1)
        sonlar.append(son2)
        # print(sonlar)
    else:
        sonlar.append(son2)
        sonlar.append(son1)
        # print(sonlar)

    if sonlar[0] % sonlar[1] == 0:
        return sonlar[1]

    while sonlar[0] % sonlar[1] != 0:
        qoldiq = sonlar[0] % sonlar[1]
        sonlar[0] = sonlar[1]
        sonlar[1] = qoldiq
    return sonlar[1]

# def ekub2(son1, son2,*son):
#     list = [son1, son2, *son]
#
#     e = ekub(list[0], list[1])
#     list.append(e)
#     list.pop(list[1])
#     list.pop(list[0])
#     while list:
#         pass
# print(ekub2(10, 50))
# #
def ekub3(son1, son2, *son):
    sonlarim = [son1, son2, *son]
    sonlar_new = []
    while True:
        while len(sonlarim)!=1 and sonlarim:
            ekub_new=ekub(sonlarim.pop(0), sonlarim.pop(-1))
            sonlar_new.append(ekub_new)
        if sonlarim:
            sonlar_new.append(sonlarim.pop(0))
        if len(sonlar_new) != 1:
            sonlarim = sonlar_new
        else:
            break
    return sonlar_new[0]

# print(ekub3(10, 50))

def ekub_list(list):
    sonlar_new = []
    while True:
        while len(list) != 1 and list:
            ekub_new = ekub(list.pop(0), list.pop(-1))
            sonlar_new.append(ekub_new)
        if list:
            sonlar_new.append(list.pop(0))
        if len(sonlar_new) != 1:
            list = sonlar_new
        else:
            break
    return sonlar_new[0]
# print(ekub_list([120,60, 48, 144]))


#
# print(ekuk_failled(6, 9, 12))
# print(math.lcm(6,9, 12))
def tubmi(son):
    ildiz = math.floor(math.sqrt(son))
    tub = True
    if son == 1:
        tub = False
    elif son ==2:
        tub = True
    elif son == 3:
        tub = True
    else:
        for i in range(2, ildiz+1):
            if son % i == 0:
                tub = False
    return tub

def tubmi2(son):
    tub = True
    if son == 1:
        tub = False
    elif son == 2:
        tub = True
    else:
        for i in range(2, son):
            if son % i ==0:
                tub = False
    return tub
# print(tubmi2(5))


def tubsonchi(son):
    eratosfen_galviri= []
    tub = 1
    while len(eratosfen_galviri) < son:
        if tubmi(tub):
            eratosfen_galviri.append(tub)
            tub +=1
        else:
            tub +=1
    return eratosfen_galviri

# print(tubsonchi(5))

def tub_oraliq(son):
    tub_sonlar = []
    for i in range(2, son+1):
        if tubmi(i):
            tub_sonlar.append(i)
    return tub_sonlar
# print(tub_oraliq(50))

def kanonik(son):
    list = tub_oraliq(son)
    list_index = 0
    natija = []
    if son == 1:
        natija.append(1)
    # print(list[list_index])
    while list:
        if son % list[list_index] == 0:
            son = son/list[list_index]
            # print(s)
            natija.append(list[list_index])

        else:
            del list[list_index]
    return natija

# print(kanonik(2))

# Failed for now))
# def kanonik_yoyilmachi(list):
#     while list:
#         a = list[0]
#         count = 1
#         while a in list:
#             for i in list:
#                 if a == i:
#                     list.remove(i)
#                     count += 1
#             natija = f"{a}^({count})"
#             return natija
#     #     natija += natija
#     # return natija



# gt = [3,4,5]
# c = 5
# print(c in gt)
# def ekub_kanonik(son1, son2, *sonlar):
#     sonlar = [son1, son2, *sonlar]
#     s = []
#     natija = []
#     for i in sonlar:
#         s.append(kanonik(i))
#     birinchi = s[0]
#     for toplam in s:
#         for a in birinchi:
#             if a in toplam:
#                 natija.append(a)
#                 print(natija)
#     kopaytma = 1
#     for index in natija:
#         kopaytma *= index
#     return kopaytma
# print(ekub_kanonik(40, 32))

def paskal(son):
    qator = [1]
    index = 0
    if son == 0:
        return qator
    elif son == 1:
        qator.append(1)
        return qator
    else:
        qatorcha = []
        for i in range(2, son + 1):
            new = qator[index] + 1
            qatorcha.append(new)
            qator = qatorcha
            index += 1
        qator.append(1)
        return qator

print(paskal(3))


# def paskal1(son):
#     qator = [1]
#     inner = [2]
#     index = 0
#     if son == 0:
#         qator
#     elif son == 1:
#         qator.append(1)
#     else:
#         for i in range(2,son+1)
#             inner_el = inner[index]+1
#             inner = [inner_el, inner_el]
#     return qator
#
# print(paskal1(3))


