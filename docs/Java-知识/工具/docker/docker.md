## 初识
#### <div class="biaoti2"></div>  docker 是简化项目上线部署而孕育而生的
><span id='gonglian'> 云计算的兴起使得硬件扩展变的很容易，但软件部署对比硬件却是一个难题。而这时 docker 的出现就是简化项目部署并能快速的交付。</span>
>> docker 是一个开源的项目，由 dotCloud 公司推出的产品。而 docker 的目标是实现轻量级操作系统虚拟化解决方案，容器的启动可以在秒级内实现，对比传统的虚拟机就有很大的优势，而且一台主机(linux) 可以同时运行千个数的容器。docker 的出现可以让 开发-测试-部署 的环境部署实现很简单。

## 重要概念
#### <div class="biaoti2"></div>  镜像仓库(Repostiory)、本地镜像(Image)、容器(Container)。三者的概念
> <span id='gonglian' style="font-weight: bold"> 镜像仓库</span><br>
> Docker 仓库是集中存放镜像文件的场所，仓库可分为公有仓库与私有仓库。最大的公开仓库是 Docker Hub 存放大量的镜像文件供用户下载，私有仓库我们可以在本地搭建起来。无论是公有或者私有都可以被自己创建的镜像文件 push 上去，使用时就可以 pull 下来啦。
> <br><br>
> <span id='gonglian' style="font-weight: bold"> 本地镜像</span><br>
> Docker 镜像就是一个只读模板，一个镜像可以包含完整的 linux 操作系统，可以在当前系统安装服务。镜像作用是用来创建一个或多个实例容器的，
> <br><br>
> <span id='gonglian' style="font-weight: bold"> 容器</span><br>
> 容器，可把容器看作是一个简易版的 linux，而 Docker 利用容器来运行服务应用程序。容器的创建需要镜像、可创建一个或多个，容器之间都是互相隔离的，可保证安全平台。
>> ![An image](/img/java/工具/docker/docker-01.png)

## 安装 docker
#### 1、安装 docker 需要的依赖
> 进到 linux 系统中，执行当前依赖安装命令:  <span id='gonglian'>  yum install -y yum-utils device-mapper-persistent-data lvm2 </span>
>> 结尾出现下面内容证明安装成功。
>> ![An image](/img/java/工具/docker/docker-02.png)

#### 2、更换 docker 的 yum 源
> 接着执行更换命令: <span id='gonglian'>  yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span>
>> 出现一下字样表示更换成功。
>> ![An image](/img/java/工具/docker/docker-03.png)
 
#### 3、安装 docker
> 最后执行安装命令: <span id='gonglian'>  yum install docker-ce </span>
>> ![An image](/img/java/工具/docker/docker-04.png)
>><br> <br>通过 yum 命令查看 docker 安装的程序:  <span id='gonglian'> yum list installed | grep docker </span>



#### 4、最后的配置与命令
> <span id='gonglian'> 这些命令都是关于 docker 自身服务相关的。也只是基本操作，如: service docker start 启动 docker 服务。还有配置 docker 镜像仓库的地址。</span>
>> docker 生命周期命令:<br>
>> <span id='gonglian'> service docker [start(启动) | stop(关闭) | status(状态) | restart(重启) ] <br></span>
>> <br>
>> 查看 docker 版本号 :  <span id='gonglian'> docker [version(版本) | info(信息)] </span>
>> <br><br>
>> 设置 docker 开机自启动 : <span id='gonglian'> chkconfig docker on </span>

> <span id='gonglian'>  配置镜像加载器 </span>
>> 编辑 /etc/docker/daemon.json 文件，如果没有该文件就创建一个名为 daemon.json 文件，添加以下内容。之后重启就可以，镜像的拉取就会快了。
>>```java 
>>{
>>  "registry-mirrors": ["https://registry.docker-cn.com","http://f1361db2.m.daocloud.io"]
>>}
>>```

## 容器命令实践
#### 创建容器启动并进入内部交互
> <span id='gonglian'> 当我们要部署服务时，就是创建 centos 操作系统的容器，并通过 /bin/bash 进入内部以其交互，可以在容器的内部安装 mysql 、redis 等等服务，不过建议一个容器就安装一个服务</span>
>> <span class="hei">docker run -it --name [容器的别名] [当前容器的镜像名称] /bin/bash</span><br>
>> ![An image](/img/java/工具/docker/docker-07.png)
>><br><br>
>> <span id='gonglian'> 退出容器的交互，返回到宿主机: <br></span>
>> 第一种: 使用该命令退出并关闭容器 <span class="hei"> exit </span> <br>
>> 第二种: 使用快捷键退出不关闭容器 <span class="hei">  ctrl + p + q</span>

>  <span id='gonglian'> 这是创建容器并以后台方式运行名为 tomcat-01 容器。 -p 表示以后台的方式运行，-p 8080:8080 表示把容器的 8080 端口绑定到宿主机的 8080 端口。当访问宿主机的 ip:8080 时，就是访问的容器的服务</span>
>> <span class="hei"> docker run -d --name tomcat-01 -p 8080:8080  tomcat </span>


#### 其他与容器命令相关的综合
>  <span id='gonglian'> 关于容器的生命周期的命令：</span>
>> <span class="hei"> docker stop [容器的名称] </span> <br>
>> 这个容器优雅退出的方式，就是发送一个退出请求，等待容器退出运行状态。如把 <span class="hei">stop</span> 换成 <span class="hei">kill</span> 那么就是直接退出，与杀死一个进程类似 
>> <br><br>
>> <span class="hei">docker [start | restart] [容器的别名]</span> 
>> start 与 restart 这个俩个分别是启动与重启容器
>> <br><br>
>> <span class="hei">docker rm [容器的别名]</span> 
>> 删除一个实列容器，只有当容器不是运行状态才可以删除
>> <br><br>
>> <span class="hei">docker [pause | unpause] [容器的别名]</span> <br>
>> pause 与 unpause 这俩个分别是暂停容器中所有的进程与恢复容器中所有的进程

>  <span id='gonglian'> 关于容器的运维方面的命令:</span>
>> <span class="hei"> docker ps </span> <br>
>> 查看所有正在运行的容器, 如果加一个 -a  <span class="hei"> docker ps -a</span> 那么就是查看所有实列出来的容器
>><br><br>
>> <span class="hei"> docker exec -it [容器的别名] /bin/bash </span> <br>
>> 启动容器后，可以通过当前的命令进入容器内部以其交互
>> ![An image](/img/java/工具/docker/docker-08.png)
>><br><br>
>> <span class="hei"> docker inspect [容器的别名]</span> <br>
>> 使用该命令可以查看容器的基础信息，如容器的 IP 等等信息的操作
>><br><br>
>> <span class="hei"> docker logs [容器的别名]</span> <br>
>> 输出容器的日志，比如: 一个容器内部有服务启动，那么通过 logs 命令在宿主机中打印出容器产生的日志信息

## 镜像命令实践

#### 删除镜像
> 镜像的制作是通过一层层的叠起来，当我们删除一个镜像时，会出现删除了很多东西，而这些都是组合起来当前的镜像。不过有一点要注意: 删除镜像先删除当前镜像创建的容器。  
>> <span class="hei"> docker rmi [镜像名]</span> <br>
>> ![An image](/img/java/工具/docker/docker-09.png)

#### 其他与镜像命令的综合
>
>> <span class="hei"> docker history [镜像名]</span> <br>
>> 查看镜像的组合，会显示所有的层级。
>> <br><br>
>> <span class="hei"> docker commit [容器被创建镜像的名字] [创建出镜像的名字]</span> <br>
>> commit 是把容器创建城镜像，而这个镜像就跟 pull 的一样，可以运行
>> ![An image](/img/java/工具/docker/docker-17.png)


## 仓库命令实践
#### 搜索镜像
> 该命令会去 docker 镜像仓库查找匹配名称的镜像并显示出来。可通过该命令查询自己需要的镜像是否存在。
>><span class="hei">docker search [镜像名称]</span>
>> ![An image](/img/java/工具/docker/docker-05.png)

#### 其他与仓库命令的综合

>> <span class="hei">docker images</span><br>
>>这个可以查看在宿主机的所有本地镜像，只要运行该命令即可
>> <br><br>
>>  <span class="hei">docker pull [IP:8080]/[仓库名]/[镜像名称]:[版本] </span><br>
>> 拉取镜像，如果没有指定 IP ,那么默认是 docker.io , 如果没有指定仓库，那么默认是在 docker 官方仓库中拉取，镜像冒号后面跟着版本号。如果没有版本号则默认是 latest。在 docker 官方创建账号，可以创建自己的仓库也可以拉取的。
>> ![An image](/img/java/工具/docker/docker-06.png)

#### 往仓库中推送镜像
> <span id='gonglian'> 1、创建一个标记 </span><br>
>> <span class="hei">docker tag [本地镜像名称] [IP与端口]/[公有仓库名]/[一个名称]:[版本]</span> <br>
>> tag 命令是把本地一个镜像复制一份, 标记成一个 push 路径。这个镜像路径也是不写的使用默认的。
>> ![An image](/img/java/工具/docker/docker-10.png)

><span id='gonglian'> 2、登录公有的仓库 </span><br>
>> <span class="hei">docker login</span> <br>
>> 只有往公有仓库 push 才需要登录账户，而私有仓库则不需要的。
>> ![An image](/img/java/工具/docker/docker-11.png)

><span id='gonglian'>3、往仓库中 push </span><br>
>> <span class="hei">docker push [标记的路径] </span> <br>
>> push 需要使用表示路径，该标记路径就表明了 IP 地址，仓库的位置，镜像的名称与版本号
>> ![An image](/img/java/工具/docker/docker-12.png)
 
## 私有仓库

> <span id='gonglian'>  1、pull 私有仓库镜像</span>
>> <span class="hei">  docker pull registry </span><br>
>> 在 docker 官方也提供了私有仓库的镜像，所有我们只要 pull 下来，就有自己私有仓库了。
>> ![An image](/img/java/工具/docker/docker-14.png)


> <span id='gonglian'> 2、在配置 http 协议请求 </span>
>> 私服默认是 https 协议传输，所以需要在目录 /etc/docker/ 下编辑 doemon.json 文件，添加一下内容。要注意的是: 配置 ip 需要的是宿主机的 IP.
>>```java 
>>{
>>    "bip":"127.17.8.1/24"  <配置网段，表示 docker 容器的 IP 是在 127.17.8 的网段下>
>>    "insecure-registries":["192.168.150.145:5000"]
>>}
>>```

> <span id='gonglian'> 3、启动私服并映射端口</span>
>> <span class="hei">docker run -d --name reg -p 5000:5000 registry:latest</span> <br>
>> ![An image](/img/java/工具/docker/docker-13.png)
>> <br><br>
>> <span id='gonglian'> 查询私有仓库的镜像<br></span>
>> 可使用该命令获取镜像的信息: <span class="hei"> curl http://192.168.150.145:5000/v2/_catalog </span><br>
>> 查看一个镜像有哪些版本信息: <span class="hei"> curl  http://192.168.150.145:5000/v2/hello[镜像名称]/tags/list </span>

## 文件挂载

#### <div class="biaoti2"></div> 容器一个目录与宿主机一个目录的数据同步
> <span id='gonglian'>  在业内有一个使用 docker 标准，就是只拿 docker 创建容器使用，不把数据存放在容器中。这是方便以后更新镜像造成数据丢失。这就要使用文件挂载，把宿主机与容器的目录数据共享，当删除容器时，宿主机的文件数据不会被删除</span>
>> <span class="hei"> docker run -it --name centosData-03 -v [挂载目录] centos /bin/bash </span> <br>
>> -v 文件挂载， 这个值是容器的挂载目录。而宿主机的默认目录都是在 /var/lib/docker/volums/ 文件夹下。可以使用 <span class="hei"> docker inspect </span> 命令查询当前容器在宿主机目录详情。
>> ![An image](/img/java/工具/docker/docker-15.png)
>><br><br>
>> <span class="hei"> docker run -it --name centosData-03 -v [容器挂载目录]:[宿主机挂载目录] centos /bin/bash </span> <br>
>> 当我们使用这个方式挂载时，就不会使用宿主机的默认挂载目录
>><br><br>

>> <span class="hei"> docker run -it --name centosData-04 --volumes-from [容器的名称] centos /bin/bash </span> <br>
>> 这个操作表示 centosData-04 容器也共享 centosData-03 容器的挂载文件夹。
>> ![An image](/img/java/工具/docker/docker-16.png)

## Dockerfile 制作镜像

``` xml
FROM  centos  <设置基础镜像，一般都是 centos 基础操作系统 >
MAINTAINER guoingcheng  <指定维护者，比如是我制作的镜像，我就写我的名字>

RUN <会在容器的 shell 终端运行命令>

ADD <把宿主机的文件复制一份到容器指定的目录，如果是压缩包那么自动解压>

WORKDIR <指定一个目录，就会在容器中 cd 到指定的目录，而 WORKDIR 后面的命令都是在该目录下执行>

EXPOSE <声明容器需要暴露的端口号，镜像 run 是就可以通过 -p 进行端口映射绑定>

ENV PATH /usr/local/nginx/sbin:$PATH <ENV 表示在容器中的系统变量中添加一条路径 /usr/local/nginx/sbin >
CMD["/bin/bash" , "-c" , "nginx -g 'daemon off;'"] <CMD 表示容器启动时默认 nginx -g 'daemon off;' 执行的命令 ，创建容器时后面的命令会覆盖掉当前的命令>
```

## Docker 网络配置