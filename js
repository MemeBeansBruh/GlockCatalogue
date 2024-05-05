import pandas as pd # type: ignore

data = pd.read_csv(r"C:\Users\purpl\Downloads\GlockModels.csv")

string_to_match = input("What Glock Model?(Ex: Glock 17 Gen 1) ")
if string_to_match != "skip":
    row = data[data['Model:'] == string_to_match].iloc[0]
    print(row)

string_to_match = input("What caliber?(.22 Long Rifle, 9x19mm, 10mm Auto, .380 ACP, .40 S&W, .357 SIG, .45 ACP, or .45 GAP) ")
if string_to_match != "skip":
    matching_rows = data[data['Caliber:'] == string_to_match]
    for index, row in matching_rows.iterrows():
        print(row)

string_to_match = input("Would you like to see the fully-automatics?(Y or N) ")
if string_to_match != "N":
    matching_rows = data[data['Fire Mode(s):'] == "semi-automatic and fully-automatic"]
    for index, row in matching_rows.iterrows():
        print(row)