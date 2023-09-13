# get the links of art from pix.ai

from bs4 import BeautifulSoup
import re

with open('./index.html', 'r', encoding='utf-8') as file:
    soup = BeautifulSoup(file.read(), 'html.parser')
    data = soup.find_all("a", {'href': re.compile('/artwork/165')})
    links = []
    for i in range(len(data)):
        links.append(data[i].get('href'))
        
print(links)
