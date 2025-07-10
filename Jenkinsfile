pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '08dd9a49-1dc5-4124-99ac-c8b2074022fc'
        NETLIFY_AUTH_TOKEN = credentials('netlify_token') // Jenkins secret
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy to Netlify') {
            steps {
                echo 'Triggering Netlify deployment using API...'
                sh '''
                    curl -X POST "https://api.netlify.com/api/v1/sites/$NETLIFY_SITE_ID/builds" \
                    -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN"
                '''
            }
        }
    }
}
