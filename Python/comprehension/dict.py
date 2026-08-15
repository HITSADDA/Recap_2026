cities = ['Jodhpur', 'Pali', 'Pune']
state = ['Rajasthan', 'Rajasthan', 'Maharastra']

z = zip(cities, state)

# for value in z:
#     print(value)

city_to_state_map = {
    city:state for city, state in z
}

print(city_to_state_map)