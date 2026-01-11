for i in range(101) :
    print(i, '% { background: linear-gradient(var(--black) 0 0) padding-box, linear-gradient(', round(i*3.6, 3), 'deg, var(--gold), white, var(--gold)) border-box; }', sep='')
