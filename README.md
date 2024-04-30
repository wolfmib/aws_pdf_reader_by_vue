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
