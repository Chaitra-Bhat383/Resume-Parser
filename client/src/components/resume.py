import warnings
import pickle

warnings.filterwarnings('ignore')
import numpy as np
import pandas as pd
import re
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_extraction.text import TfidfVectorizer

resumeDataSet = pd.read_csv('UpdatedResumeDataSet (1).csv', encoding='utf-8')


def cleanResume(resumeText):
    resumeText = re.sub('httpS+s*', ' ', resumeText)  # remove URLs
    resumeText = re.sub('RT|cc', ' ', resumeText)  # remove RT and cc
    resumeText = re.sub('#S+', '', resumeText)  # remove hashtags
    resumeText = re.sub('@S+', '  ', resumeText)  # remove mentions
    resumeText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[]^_`{|}~"""), ' ',
                        resumeText)  # remove punctuations
    resumeText = re.sub(r'[^x00-x7f]', r' ', resumeText)
    resumeText = re.sub('s+', ' ', resumeText)  # remove extra whitespace
    return resumeText


resumeDataSet['cleaned_resume'] = resumeDataSet.Resume.apply(lambda x: cleanResume(x))
var_mod = ['Category']
le = LabelEncoder()
for i in var_mod:
    resumeDataSet[i] = le.fit_transform(resumeDataSet[i])
requiredText = resumeDataSet['cleaned_resume'].values
requiredTarget = resumeDataSet['Category'].values
word_vectorizer = TfidfVectorizer(
    sublinear_tf=True,
    stop_words='english',
    max_features=1500)
word_vectorizer.fit_transform(requiredText)
WordFeatures = word_vectorizer.transform(requiredText)

loaded_model = pickle.load(open("model.sav", 'rb'))
resume = input("Enter the resume: ")
requiredText = np.array([resume])
WordFeatures = word_vectorizer.transform(requiredText)
result = loaded_model.predict(WordFeatures)
# print(result)

if(result==0):
    print("Advocate")
elif(result==1):
    print("Arts")
elif (result == 2):
    print("Automation testing")
elif (result == 3):
    print("Blockchain")
elif (result == 4):
    print("Business Analyst")
elif (result == 5):
    print("Civil Engineer")
elif (result == 6):
    print("Database")
elif (result == 7):
    print("Data Science")
elif (result == 8):
    print("Devops")
elif (result == 9):
    print("DotNet Developer")
elif (result == 10):
    print("ETL developer")
elif (result == 11):
    print("Electrical engineer")
elif (result == 12):
    print("HR")
elif (result == 13):
    print("Hadoop")
elif (result == 14):
    print("Health and fitness")
elif (result == 15):
    print("Java Developer")
elif (result == 16):
    print("Mechanical engineer")
elif (result == 17):
    print("Network security engineer")
elif (result == 18):
    print("Operation Manager")
elif (result == 19):
    print("PMO")
elif (result == 20):
    print("Python Developer")
elif (result == 21):
    print("SAP Developer")
elif (result == 22):
    print("Sales")
elif (result == 23):
    print("Testing")
elif (result == 24):
    print("Web Designer")
else:
    print("Do Engineering xD")