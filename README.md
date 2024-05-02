# pdf_reader



running vue with pdf reader feature on AWS-ec2
---

![alt text](https://github.com/wolfmib/aws_pdf_reader_by_vue/blob/main/img/pdf_reader_demo.jpg?raw=true)



---
##  🐥🐥🐥 Note
- use vue2 (if you want vue3, you might consider certain package updated and installation)
- with stable node 18
- check package.json for detail
- support http (dev-env) only, if you want to set https, consider following release or do your own changing
- ec2 instance need aws-latest-linux, with instance-medium ( memory >= 4GB)
- set security-group with open ssh , http, https for development and open inbound-port 8080 (dev) as well.
- please turn-off the your instance after dev-testing (save ur money, prevent security http attack ..)

- my-linkedin: https://www.linkedin.com/in/johnny-hung-data-analytic-gaming-actuary  



## 🛠 Install nvm 
----
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
- source ~/.bashrc
- nvm -v
- Into: you shall see 0.38.0 version
----

## ☋ Then use nvm to install node
- nvm ls-remote
- nvm install v18.20.2
- node -v

## 🖨 Download souce code via https clone
- git clone https://github.com/wolfmib/aws_pdf_reader_by_vue.git
- cd aws_pdf_reader_by_vue/
- npm install
- npm run serve
- then you shall be able to check running status, the go back your aws to change the private-ip to public-ip
- go to your brwoser type the url, you shall see the pdf_render in your web-site 👍👍👍

## ☢️☢️☢️ Warning !! Important Considerations for Development Use:

Please note that this application is intended for development purposes only. It runs on HTTP, not HTTPS, which means it is not yet suitable for production environments. The EC2 instance recommended for this setup is 4GB, which falls outside the AWS free tier due to the significant resources required by pdf.js and Vuetify. Remember to stop your instance after testing to avoid unnecessary charges.

In future updates, we plan to address security by implementing HTTPS and using official domain names for production deployments in AWS. This will enhance the application's security and readiness for real-world use.


See [LinkedIn Article](https://www.linkedin.com/pulse/build-vue-pdf-reader-aws-ec2-step-by-step-guide-developers-hung-xeihf)


-------------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
