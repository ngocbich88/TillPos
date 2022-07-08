import sys
from json import load, dump  

print("\nName of Python script:", sys.argv[0])

run_env = sys.argv[1];

with open("cypress.json", "r") as file_object:  
    json_data = load(file_object)  
    if run_env=="stg":
        json_data["baseUrl"] ="https://phoenix-stg.telio.me"
        json_data["env"]["host_api"]="https://api.stg.telio.me"
        json_data["env"]["host_api_promotion"]="https://api-promo.stg.telio.me"
        json_data["env"]["customerId"]=7649
    elif run_env=="ppd":
        json_data["baseUrl"] ="https://phoenix-ppd.telio.me"
        json_data["env"]["host_api"]="https://api.ppd.telio.me"
        json_data["env"]["host_api_promotion"]="https://api.ppd.telio.me"
        json_data["env"]["customerId"]=100039
    print(json_data)
with open("cypress.json", "w") as file_object: 
    dump(json_data, file_object,indent=4,ensure_ascii=False)  