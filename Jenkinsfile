pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "your-dockerhub-username/jenkins-starter"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/jenkins-starter.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push $DOCKER_IMAGE
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step goes here"
            }
        }
    }
}
