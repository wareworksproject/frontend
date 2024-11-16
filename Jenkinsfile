pipeline {
agent any

tools {
maven 'MAVEN'
}
    
stages{

stage('Build'){
steps {
sh 'mvn clean package'
}
}

//stage('Build'){
//steps {
//sh 'mvn package'
//sh 'echo Clean build completed'
//}
    //post {
    //success {
    //echo 'Archiving the artifacts 3'
    //archiveArtifacts artifacts: '**/target/*.war'                   
    //}
    //}   
//}
    

stage('Test'){
steps {
sh 'mvn test'
}
}
    
//stage('Code Analysis'){
//steps {
    //withSonarQubeEnv(credentialsId: 'sonarqube-jenkins', installationName: 'Sonarqube') {
//withSonarQubeEnv(installationName: 'Sonarqube') {
// sh "mvn sonar:sonar"
//}
//}
//}
    
stage('Rename Package'){
steps {
sh 'mv ${WORKSPACE}/target/*.war ${WORKSPACE}/target/app.war'
}
}
    
//stage('Validation'){
//steps {
//input 'Kindly Approve This Package'
//}
//}
    
stage('Deployment'){
steps {
sshPublisher(publishers: [sshPublisherDesc(configName: 'ApacheSrv', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '/target/', sourceFiles: '**/*.war')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
}
}  

//stage('Email Notification'){
//steps {
//sh 'echo Sending email'
//}
    
//post {
    
//always {
//emailext (
//subject: '$DEFAULT_SUBJECT',
//to: '$DEFAULT_RECIPIENTS',
//body: '$DEFAULT_CONTENT', 
//attachLog: 'true',
//recipientProviders: [ requestor() ]
//)
//}
    
//success {
//emailext (
//subject: '$DEFAULT_SUBJECT',
//to: '$DEFAULT_RECIPIENTS',
//body: '$DEFAULT_CONTENT', 
//attachLog: 'true',
//recipientProviders: [ requestor() ]
//)
//}

//failure {
//emailext (
//subject: '$DEFAULT_SUBJECT',
//to: '$DEFAULT_RECIPIENTS',
//body: '$DEFAULT_CONTENT', 
//attachLog: 'true',
//recipientProviders: [ requestor() ]
//)
//}
    
//unstable {
//emailext (
//subject: '$DEFAULT_SUBJECT',
//to: '$DEFAULT_RECIPIENTS',
//body: '$DEFAULT_CONTENT', 
//attachLog: 'true',
//recipientProviders: [ requestor() ]
//)
//}
    
//}    
//}
    
}    
}
