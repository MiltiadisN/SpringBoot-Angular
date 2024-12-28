
# Step 1: Build Angular Application
FROM node:18 AS angular-build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install Angular CLI globally and project dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN ng build --configuration production

# Expose port 80
EXPOSE 4200

# Run the Angular development server on port 80
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]