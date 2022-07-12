pipeline {
    node("windows"){

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("medamine/first-img-v1")

        /* Push the container to the custom Registry */
        customImage.push()
    }
   
}
