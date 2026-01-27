# Use the official Cypress image with Node & Chrome pre-installed
FROM cypress/included:13.7.3

# Set working directory inside the container
WORKDIR /e2e

# Copy package.json & package-lock.json first (for faster builds)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of your project
COPY . .

# Default command: run Cypress tests
CMD ["npx", "cypress", "run"]
