pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/halitiiagron/Jenkins-4.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
}