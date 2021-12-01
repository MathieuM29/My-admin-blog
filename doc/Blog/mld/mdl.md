## mld ##

author(id SERIAL, name TEXT, mail TEXT, password TEXT, description TEXT, image TEXT)
article(id SERIEL, title TEXT, content TEXT, image TEXT, #author(id SERIAL))
category(id SERIAL, name TEXT, color TEXT)
article_has_category(#article(id SERIAL), #category(id SERIAL))