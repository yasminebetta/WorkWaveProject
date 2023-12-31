# Utilisez une image de base pour votre application Angular
FROM node:14.16.1

# Définissez le répertoire de travail pour votre application Angular
WORKDIR /app

# Copiez les fichiers de votre application Angular dans le répertoire de travail
COPY . .

# Installez les dépendances de votre application Angular
RUN npm install

# Construisez l'application Angular pour la production
RUN npm run build --prod

# Exposez le port sur lequel votre application Angular sera accessible
EXPOSE 80

# Démarrez votre application Angular
CMD ["npm", "start"]
