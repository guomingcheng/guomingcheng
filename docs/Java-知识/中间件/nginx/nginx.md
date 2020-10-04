## 下载与安装

#### 1、进入 /usr/local/src/ 目录下执行: <br>
>下载命令:  <span id='gonglian'> wget http://nginx.org/download/nginx-1.9.0.tar.gz</span>
>> 如出现下图显示 “未找到命令” , 就执行:  <span id='gonglian'> yum -y install wget </span>再接上一步即可
![An image](/img/java/中间件/nginx/nginx-01.png)

#### 2、接下再 /usr/local/src/ 目录下有一个 nginx-1.9.0.tar.gz 文件, 执行以下: <br>
> 解压命令:  <span id='gonglian'> tar -zxvf nginx-1.9.0.tar.gz </span>  到当前文件夹
![An image](/img/java/中间件/nginx/nginx-02.png)


#### 3、cd 到解压后的 nginx-1.9.0 目录，安装 nginx 需要的依赖: <br>
>执行:  <span id='gonglian'> yum install -y openssl openssl-devel</span> <br>
>执行:  <span id='gonglian'> yum -y install zlib zlib-devel </span><br>
>执行:  <span id='gonglian'> yum -y install zlib zlib-devel </span>

#### 4、nginx 目录下，设置 nginx 安装参数
> ./configure 是源码目录，--prefix 的值是要安装的目录，后面是 nginx 的模块 <br>
> 执行命令:  <span id='gonglian'>./configure --prefix=/usr/local/nginx --with-http_ssl_module</span>
>>  如出现下图红色错误部分，就执行  <span id='gonglian'> yum -y install gcc gcc-c++ autoconf automake make </span>
    ， 再重复执行上一次命令。
![An image](/img/java/中间件/nginx/nginx-03.png) 

>![An image](/img/java/中间件/nginx/nginx-04.png) 

#### 5、nginx 目录下，编译 && 安装 nginx
> 执行命令:  <span id='gonglian'> make && make install </span>


#### 6、启动 nginx。进入 nginx 安装的目录 /usr/local/nginx/sbin
> 执行命令: <span id='gonglian'> ./nginx</span> <br>
> 注意: 如主机访问不到虚拟机的 nginx 服务，需要开放虚拟机的端口，参考该教程: <a href="https://jingyan.baidu.com/article/5552ef4796f55e518efbc94f.html" target="_blank">Centos-7 开放端口</a>

##  基本介绍与基本命令
#### <div class="biaoti2"></div> 基本命令接受
> #### 进入到 nginx 安装目录下的 sbin 目录
>> 执行命令: <span id='gonglian'> ./nginx -s stop </span>  停止<br>
>> 执行命令: <span id='gonglian'> ./nginx -s quit </span>      退出<br>
>> 执行命令: <span id='gonglian'> ./nginx -s reload  </span>  重新加载 nginx.conf 核心配置文件<br>
>> 执行命令: <span id='gonglian'> ./nginx -t  </span>  检查配置文件是否有错误 <br>
>> 执行命令: <span id='gonglian'> ./nginx -c /usr/local/nginx/conf/nginx.conf  </span>  指定一个配置文件来启动

#### <div class="biaoti2"></div> 文件目录介绍

| 目录名称       |  介绍         | 
| ------------- |:-------------:| 
| conf      | 存放 nginx 需要的配置文件 | 
| html     |  存放静态资源目录     |   
| logs | 存放日志目录    |    
| sbin  | 存放 nginx 的启动程序      |  

## 主配置文件与单配置说明

#### <div class="biaoti2"></div> nginx.conf 主配置文件详情描述 <br><br>
<div class="nginx-body">
<span style='font-size: 13px;'>#user nobody;</span>
<span id='gonglian' style='font-size: 13px'>//这声明该 nginx 是哪个用户的，如 # 掉，代表哪个用户都可以。当指明用户时，尽可能是root 级别的<br></span>
<span style='font-size: 13px;'>worker_processes <span class="hong">1</span>;</span>
<span id='gonglian' style='font-size: 13px'>// 值 1 表示启动一个 worker 线程，一般是服务器是有几个 CPU 那就配置几个 <br></span><br>

<span style='font-size: 13px;'>
#error_log  logs/error.log;  <span id='gonglian' style='font-size: 13px'>//这三行表示日志的输出级别, 可以选择性的配置 <br></span>
#error_log  logs/error.log  <span class="hong">notice</span>;  <br>
#error_log  logs/error.log  <span class="hong">info</span>;  <br>
</span>

<span style='font-size: 13px;'>#pid <span class="hong">logs/nginx.pid</span>;</span>
<span id='gonglian' style='font-size: 13px'>//pid 表示记录 nginx 启动后的进程 id 好。可以到目录文件找到进程号 <br></span>

<div style='font-size: 13px;'>
events{<br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//表示 nginx 在 Liunx 上读取静态资源的线程数, 如不设置。liunx 默认的较少, 高访问时 nginx 会阻塞</span><br>
<img class="nginx-img">worker_connections <span class="hong">1024</span>;
</span>

}

</div>

<div style='font-size: 13px;'>
http{<br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//引入 nginx 相关联的程序文件，而 mime.types 该文件在 nginx 安装/conf/mime.types</span><br>
<img class="nginx-img">include <span class="hong">mime.types</span>;
</span><br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>// nginx 处理文件默认使用的字符集, 也可以更换别的字符集处理</span><br>
<img class="nginx-img">default_type <span class="hong">application/octet-stream</span>;
</span><br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//这是声明日志的变量， 变量名为 mian。以 $ 开头的都是常量皆是 nginx 提高的，可以拼接成一条日志 </span><br>
<img class="nginx-img">#log_format <span class="lan"> main</span>  '$remote_addr - $remote_user [$time_local] "$request" ' <br>
<img class="nginx-img">#                 <span style='display: inline-block; width: 117px;'></span>'$status $body_bytes_sent "$http_referer" '<br>
<img class="nginx-img">#                <span style='display: inline-block; width: 110px;'></span>  '"$http_user_agent" "$http_x_forwarded_for"';
</span><br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//该表示生成日志，该值是日志将要输出到那个文件下。表示使用 mian 变量的日志格式 </span><br>
<img class="nginx-img">#access_log   
 <span class="hong">logs/access.log</span><span class="lan"> main</span>;
</span><br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//因为文件上传于下载的传输效率很低，而 no 表示 nginx 开启高效传输效率</span><br>
<img class="nginx-img">sendfile <span class="hong">no</span>;
</span><br><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//表示客户端连接 nginx, 在 60 毫秒内连不上表示连接超时</span><br>
<img class="nginx-img">keepalive_timeout <span class="hong">60</span>;
</span><br><br>

<div class="nginx-div">

<div style='font-size: 13px;'>
server{<span id='gonglian' style='font-size: 13px'>//配置一个 server 代表一个虚拟主机</span><br><br>

<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'>//表示该虚拟机监听 80 端口</span><br>
</span><br>

<span>
<img class="nginx-img">server_name  <span class="hong">localhost</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span><br>

<span>
<img class="nginx-img">#access_log  <span class="hong">logs/access.log</span>;
<span id='gonglian' style='font-size: 13px'>// 在 server 下配置的与 http 的相同，server 的会覆盖掉 http </span><br>
</span><br>

<div class="nginx-div">

<div style='font-size: 13px;'>
location /{<span id='gonglian' style='font-size: 13px'> // location 是匹配资源的作用, 当输入 guomingcheng.github.io 就会匹配当前的</span><br><br>

<span>
<img class="nginx-img">root  <span class="hong">html</span>;
<span id='gonglian' style='font-size: 13px'>// html 是一个目录, 可以使用绝对路径, 也可以是相对路径, 如当前会找到 nginx/html  </span><br>
</span><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//index 命令只有 url 后面跟着 / 斜杆才有效，index 就是在哪个指定目录下找该文件</span><br>
<img class="nginx-img">index   <span class="hong">index.html index.htm;</span>;
</span><br>

}

</div>

</div>

}

</div>

</div>


}

</div>

</div>

## location 匹配规则
#### <div class="biaoti2"></div> location 路由语法匹配规则 <br><br>

<div style='font-size: 12px'>

| 实列       | 名称         |  运算符 | 说明 
| ------------- |:------------- |:-------------:| :-------------:| 
| location /{ root html; }      | 普通匹配 |  | 普通命中，但是会被正则匹配覆盖掉。优先级最低的
| location ^~ /b/{ }   | 相对匹配      | ^~| 也是和普通匹配一样命中，但是不会被正则匹配覆盖掉，优先级只低于精准匹配
| location = /guo.html{ }      |  精准匹配 | = | 精准匹配也就是与 path 完全相等才会命中，优先级最高
| location ~* /b/{ }  | 不区分大小写正则匹配    |   ~*| 正则匹配只高于普通匹配
| location ~ /b/{ }   | 区分大小写正则匹配      | ~|

</div>

![An image](/img/java/中间件/nginx/nginx-07.png)
 
## 指令介绍 
#### <div class="biaoti2"></div> nginx 指令使用介绍 <br><br>
 列子 URL : http://www.guomingcheng.com/ming/cheng.html
<div style='font-size: 12px'>

| 指令      | 作用        |   使用 
| ------------- |:------------- | :-------------:| 
| root      | 指定静态资源目录 | root 是声明一个 path 路径, 在 nginx 默认时 path 路径是 /usr/local/nginx/html , nginx 是安装目录。root 就是要改过默认的静态资源的路径，另一个作用是：会留下命中的路径，如 location /ming{} 命中会留下路径是 ming/index.html
| alias       |  指定静态资源目录 | 也是以 root 相同的都是声明一个 path 路径, 而不同的是会把命中的剔除掉，例如：location /ming{} 命中后留下的路径是 index.html
| set       |  定义一个变量 | 在 server 花括号内声明: set $a 33, 这样就是定义了一个变量
| echo       |  输出文本 | 这是与 javaEE 中的 resp 响应浏览器一样，但是需要安装模块，这并不是 nginx 默认就有的。安装步骤详见: <a href="nginx-中级.html#miaodian1">echo 模块安装</a> 

</div>

## rewrite 关键字
#### <div class="biaoti2"></div> nginx 的请求转发与重定向 <br><br>
 
<div class="nginx-body">

<div style='font-size: 13px;'>
server{<span id='gonglian' style='font-size: 13px'>//配置一个 server 代表一个虚拟主机</span><br><br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
</span><br>
<span>
<img class="nginx-img">server_name  <span class="hong">localhost</span>;
</span><br>

<br>
<div class="nginx-div">

<div style='font-size: 13px;'>
location /ming/cheng/index.html{<br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'> //redirect 重定向, ^/ 是正则表达式，表示无论什么字符串都命中。红色值表示将要替换掉命中的字符串。 </span><br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'> //效果就如：浏览器重新请求 http://location:80/ming/index.html URL</span><br>
<img class="nginx-img">rewrite ^/ <span class="hong">/ming/index.html</span> <span class="lan">redirect</span>;
<span id='gonglian' style='font-size: 13px'>//  </span><br>
</span>

}

</div>



<div style='font-size: 13px;'>
location = /ming/index.html{<br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'> //break 请求转发，红色值会替换掉正则表达式命中的。</span><br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'> //效果就如：在到 root 声明的 path 下查找 /ming/cheng/index.html 指定的文件</span><br>

<span>
<img class="nginx-img">rewrite ^/ <span class="hong">/ming/cheng/index.html</span> <span class="lan">break</span>;
<span id='gonglian' style='font-size: 13px'>//红色是路径, 蓝色是请求转发的关键字 </span><br>
</span>

<span>
<img class="nginx-img">root  <span class="hong">html</span>;
<span id='gonglian' style='font-size: 13px'>//</span><br>
</span>
    

}

</div>

<div style='font-size: 13px;'>
location = /ming/index.html{<br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'> //last 请求转发，红色值会替换掉正则表达式命中的。</span><br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'> //效果就如：根据替换掉的 path 再一次刷新 location ，重新命中</span><br>

<span>
<img class="nginx-img">rewrite ^/ <span class="hong">/ming/cheng/index.html</span> <span class="lan">last</span>;
<span id='gonglian' style='font-size: 13px'>//红色是路径, 蓝色是请求转发的关键字 </span><br>
</span>

}

</div>


</div>

}

</div>


</div>
 
## 日志切割配置

#### 1、可以在 nginx.conf 文件中定义自己日志格式, 如下图片:
> ![An image](/img/java/中间件/nginx/nginx-05.png)
>> 可以使用命令:  <span id='gonglian'>tail -f access.log </span>  来实时看日志的打印。access.log 日志的路径
>> ![An image](/img/java/中间件/nginx/nginx-06.png)

#### 2、在 nginx/sbin 目录下创建一个可执行文件，编写下面的 Xshell 脚本
> #### 文件为: cutting.sh , 保存退出
> <div class='nginx-body' style='font-size: 13px; line-height: 23px'> 
> #!/bin/bash<br>
> LOG_HOME="/usr/local/nginx/logs"  <span id='gonglian' style='font-size: 13px'>//该值选择自己安装 nginx 路径下的 logs 目录</span><br>
> LOG_PATH_BAK=`date +%Y-%m-%d` <br>
> mv ${LOG_HOME}/access.log ${LOG_HOME}/access.${LOG_PATH_BAK}.log <br>
> mv ${LOG_HOME}/error.log ${LOG_HOME}/error.${LOG_PATH_BAK}.log <br>
> kill -USR1 `cat ${LOG_HOME}/nginx.pid` 
> </div>
 
>> 当保存退出时该 cutting.sh 还没有可执行权限，需要在当前目录下执行命令为: <br> <span id='gonglian'>chmod +x cutting.sh</span><br>

#### 3、在 nginx/sbin 目录下制定配置命令
> 使用命令: crontab -e ,将会打开文件编辑。填写如下文本
> <div class='nginx-body' style='font-size: 13px; line-height: 23px'> 
> <span id='gonglian'>//五个 * 号从左到右分别是 秒分时天月 。就会执行 cutting.sh </span><br>
> 00 23 * * * /usr/local/nginx/sbin/cutting.sh  <a href="https://www.cnblogs.com/p0st/p/9482167.html" target="_blank">定时时间参考该教程</a>
> </div>

## 第三方模块安装

#### 1、进入 /usr/local/src/ 目录下执行: <br>
> <span style='font-size: 15px' > 1.1、echo 模块下载命令 </span>: <br><span id='gonglian' style='font-size: 13px' >  wget https://github.com/openresty/echo-nginx-module/archive/v0.60.tar.gz</span>
>> 如出现以下字样，就代表模块下载好了
![An image](/img/java/中间件/nginx/nginx-08.png)

#### 2、接下再 /usr/local/src/ 目录会有你跟下载模块的 tar 包，执行解压命令: <br>
> 解压命令:  <span id='gonglian'> tar -zxvf *.tar.gz </span>  到当前文件夹

#### 3、进入 nginx 解压后的目录下，编译添加模块
> <span style='font-size: 15px' > 1.1、echo 模块编译添加 </span>: <br><span id='gonglian' style='font-size: 13px' >./configure --add-module=/usr/local/src/echo-nginx-module-0.60 --with-http_ssl_module</span>
>![An image](/img/java/中间件/nginx/nginx-04.png) 

#### 4、nginx 解压后的目录下，安装 * 模块命令:
> 执行命令:  <span id='gonglian' style='font-size: 13px'> make && make install </span>


#### 5、生效问题
> 注意: 如果模块安装没有问题, 但没有生效，那么就先杀死 nginx 服务，再重新开启。

## 反向代理与负载均衡

<ul class="nginx-ul"> 
<li>
<div>192.168.150.127</div>
<div>nginx</div>
<div>代理: 静态资源服务器</div>
</li>
<li>
<div>192.168.150.128</div>
<div>tomcat</div>
<div>负载: 动态资源服务器</div>
</li>
<li>
<div>192.168.150.129</div>
<div>tomcat</div>
<div>负载: 动态资源服务器</div>
</li>
<li>
<div>192.168.150.126</div>
<div>nginx</div>
<div>中间站服务器配置</div>
</li>
</ul>

<br>

####  <div class="biaoti2"></div> 在 nginx.conf 文件如何配置以及说明

<br>
<div class="nginx-body">

<div style='font-size: 13px;'>
http{<br><br>

<div class="nginx-div">

<div style='font-size: 13px;'>
upstream <span class="lan"> nginx</span>{<span id='gonglian' style='font-size: 13px'>// 配置负载服务器, <span class="lan"> nginx</span> 相当是变量, 花括号内可以随意添加 n 机器</span><br> <br>

<span>
 <img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//使用该指令，可以解决 session 问题，但是 weight 会失效。因为他以客户端的 IP 做为键，以一台服务器<img class="nginx-img">作为值，该客户端每次访问都是相当的服务器，session 也将一致，但是宕机了就没办法了</span><br>
<img class="nginx-img">#ip_hash; 
</span><br><br>


<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//如何不设置 weight 权重，nginx 默认是 1:1 模式轮询, 就现在这样设置, 就表示 128 IP 2 次 余 129<img class="nginx-img"> IP 一次这样轮询</span><br>
<img class="nginx-img">server<span class="hong"> 192.168.150.128</span> weight=<span class="lan">2</span>;<br>
</span>

<span>
<img class="nginx-img">server   <span class="hong">192.168.150.129</span> weight=<span class="lan">1</span>;
</span><br>

}

</div>

</div>



<div class="nginx-div">



<div style='font-size: 13px;'>
server{
<br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'>//表示该虚拟机监听 80 端口</span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">localhost</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span><br>




<div class="nginx-div">

<div style='font-size: 13px;'>
location /nginx{<br> 
<span id='gonglian' style='font-size: 13px'>// nginx 对应的是上面配置的变量。但需要注意的一点: nginx 后面跟着斜杆就相当 alias , 否则就是 root </span><br>

<br>
<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//浏览器输入: http://127.0.0.1/<span class="hong">nginx/tomcat/A131.html</span></span><br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//末尾没斜杆: http://192.168.150.128/<span class="hong">nginx/tomcat/A131.html</span></span><br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//末尾有斜杆: http://192.168.150.128/<span class="hong">tomcat/A131.html</span></span><br>
<img class="nginx-img">proxy_pass  <span class="hong">http://<span class="lan">nginx</span>/</span>;
</span>
<br>}
</div>

</div> <br>

<div class="nginx-div">
<div style='font-size: 13px;'>

location /130{<br>
<span id='gonglian' style='font-size: 13px'>//反向代理与负载均衡都是使用 proxy_pass 关键字, 只要端口的后面跟着 / 斜杆, 就是 alias 模式。无论后面有 psth 是否有斜杆无关</span>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//浏览器输入: http://127.0.0.1/130/<span class="hong">nginx/A130.html</span></span><br>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//端口有斜杆: http://192.168.150.130/nginx/<span class="hong">nginx/A130.html</span></span><br>
<img class="nginx-img">proxy_pass  <span class="hong">http://192.168.150.127/nginx</span>;
</span>
<br>}
</div>

</div>

}

</div>



</div>


}

</div>

</div>

## nginx 解决跨域

#### <div class="biaoti2"></div>  什么是跨域
> <span style='font-size: 13px'>在浏览器有一个同源策略。该策略描述的是，当浏览器请求 www.mingcheng.com 域名时返回一个 HTML 页面</span> 
> <span style='font-size: 13px'>，在该页面使用 ajax 请求别的如 www.guomingcheng.com 下的 json 数据时，这样不同域名就会产生跨域，不止域名不同产生跨域，当一个 url的协议、域名、端口三者之间任意一个与当前页面 url 不同即为跨域，如下图：</span> 
> ![An image](/img/java/中间件/nginx/nginx-09.png)

>> <span style='font-size: 13px'>当浏览器发现请求的域名不同时, request 会携带一个字段 Origin 值为来源网址 www.mingcheng.com , 如下:</span>
>> ![An image](/img/java/中间件/nginx/nginx-10.png) 
>> <span style='font-size: 13px'> 如果想要 www.mingcheng.com 请求成功，web 服务需要在 response 时，设置 Access-Control-Allow-Origin 字段的值为 www.mingcheng.com , 当浏览器检查该字段的值是  www.mingcheng.com , 就代表目标 web 服务信任该域名。这样就可以解决跨域了。</span>
>> ![An image](/img/java/中间件/nginx/nginx-11.png)  

#### <div class="biaoti2"></div>  解决跨域

<br>
<div class="nginx-body">

<div style='font-size: 13px;'>
http{<br><br>


<div class="nginx-div">



<div style='font-size: 13px;'>
server{
<br><br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'>//表示该虚拟机监听 80 端口</span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">www.guomingcheng.com</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span><br>

<span>
<img class="nginx-img">if($http_origin = http://www.mingcheng.com){<br>
<img class="nginx-img"> <img class="nginx-img">set <span class="lan">$allow_url</span> $http_origin;<br>
<img class="nginx-img">}  
</span><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//是否允许请求带有验证信息</span><br>
<img class="nginx-img">add_header Access-Control-Allow-Credentials <span class="hong">true</span>;
</span><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'>//允许跨域访问的域名，可以是多个一列，也可以使用 * , * 代表着那个域名都可以</span><br>
<img class="nginx-img">add_header Access-Control-Allow-Origin <span class="lan">$allow_url</span>;
</span><br>



<div class="nginx-div">
<div style='font-size: 13px;'>

location /tomcat{<br>

<span>
</span>}
</div>

</div>

}

</div>
</div>
}
</div>

</div>

## 防盗链

#### <div class="biaoti2"></div>  让静态资源只在自己域名下的 html 离显示

> <span id='gonglian' style='font-size: 13px'>valiad_referers: 是匹配域名的白名单，如果不匹配，那么 nginx 就把内置变量 $valid_referer 设置为 1，就会进入 if 快返回 404。校验的值就是浏览器传入来的 Referer 字段的值，该值表示当前请求来自哪的域名下的，如下图:</span><br>
> ![An image](/img/java/中间件/nginx/nginx-14.png)  
> <span id='gonglian' style='font-size: 13px'> valiad_referers 的值: 是一个正则表达式, 可根据你写的正则来配置多个白名单  </span>

<div class="nginx-body">

<div style='font-size: 13px;'>
http{<br><br>


<div class="nginx-div">



<div style='font-size: 13px;'>
server{
<br><br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'>//表示该虚拟机监听 80 端口</span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">www.guomingcheng.com</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span><br>

<div class="nginx-div">
<div style='font-size: 13px;'>

location /tomcat{<br>

<span>
<img class="nginx-img">valid_referers  <span class="hong">www.guomingcheng.com</span>;
</span><br>

<span>
<img class="nginx-img">if($invalid_referer){<br>
<img class="nginx-img"> <img class="nginx-img">return <span class="hong">404</span> ;<br>
<img class="nginx-img">}  
</span><br>
<br>
<span>
<img class="nginx-img">root  <span class="hong">html/static</span>;
</span><br>

<span>
</span>}
</div>

</div>

}

</div>
</div>
}
</div>

</div>

## 客户端缓存

#### <div class="biaoti2"></div> 让服务器减少带宽

> <span id='gonglian' style='font-size: 13px'> expires 是缓存关键字, 他告诉浏览器该 location 下的静态资源你可以在本地缓存多少时间 </span><br>
> <span id='gonglian' style='font-size: 13px'> 时间单位: [2s = 2秒钟] [2m = 2分钟钟] [2h = 3小时] [2d = 天]  </span>


<div class="nginx-body">

<div style='font-size: 13px;'>
http{<br><br>


<div class="nginx-div">



<div style='font-size: 13px;'>
server{
<br><br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'>//表示该虚拟机监听 80 端口</span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">www.guomingcheng.com</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span>
<div class="nginx-div">
<div style='font-size: 13px;'>

location ^~ /tomcat{<br>

<span>
<img class="nginx-img">expires  <span class="hong">2s</span>;
</span><br>

<span>
<img class="nginx-img">root  <span class="hong">html/static</span>;
</span><br>

<span>
</span>}
</div>

</div>

}

</div>
</div>
}
</div>

</div>

## 文件压缩

#### <div class="biaoti2"></div> 压缩传输的数据，让服务器减少带宽资源    
> <span id='gonglian' style='font-size: 13px'> 浏览器与 nginx 交互时，当一个 url 请求 nginx 是，浏览器会携带自身支持解压缩类型的值一并传：如下图: </span><br>
> ![An image](/img/java/中间件/nginx/nginx-12.png)  
> <span id='gonglian' style='font-size: 13px'> nginx 可选用浏览器能解压的类型进行对文件压缩，也并携带返回，让浏览器根据那个类型来解压: </span><br>
> ![An image](/img/java/中间件/nginx/nginx-13.png)  
 
<div class="nginx-body">

<div style='font-size: 13px;'>
http{<br><br>


<div class="nginx-div">



<div style='font-size: 13px;'>
server{
<br><br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'>//表示该虚拟机监听 80 端口</span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">www.guomingcheng.com</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span>
<div class="nginx-div">
<div style='font-size: 13px;'>

location ~ /(.*)\.(html|js|css|jpg|jpeg|png|gif)${ <span id='gonglian' style='font-size: 13px'>//url 的后缀只要是书写的都能匹配</span><br>

<span>
<img class="nginx-img">gzip <span class="hong">on</span>; <span id='gonglian' style='font-size: 13px'># on 是启用 gzip , 默认是 off 不启用</span><br>
</span><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'># 表示 js、css、html、jpg、png、gif 的格式文件启用 gzip 压缩功能</span><br>
<img class="nginx-img">gzip_types  <span class="hong">application/javascript text/css image/jpeg image/png image/gif</span>;
</span><br>

<span>
<img class="nginx-img">gzip_min_length  <span class="hong">10</span> <span id='gonglian' style='font-size: 13px'>#10 是压缩文件的最小值，小于该值得文件不会压缩</span>;
</span><br>
<span>
<img class="nginx-img">gzip_buffers  <span class="hong">4 1k</span><span id='gonglian' style='font-size: 13px'> #设置压缩响应的缓冲区的个数与大小，默认是内存一页的大小</span>;
</span><br>
<span>
<img class="nginx-img">gzip_comp_level  <span class="hong">1</span> <span id='gonglian' style='font-size: 13px'>#压缩级别，取值范围是 1--9 ，值越大压缩的比率就越大，但会耗费 cpu 的时间</span>;
</span><br><br>

<span>
<img class="nginx-img">root  <span class="hong">html/static</span>;
</span><br>

<span>
</span>}
</div>

</div>

}

</div>
</div>
}
</div>

</div>

## https 协议传输

#### <div class="biaoti2"></div> 让数据传输之间更加安全
> <span id='gonglian' style='font-size: 13px'> https 协议需要的证书文件与私钥文件，是在阿里云申请时会有这俩个文件，只需要存放在对应的路径就行，阿里云申请的也是验证过的。但是: 没有公司是不能申请验证的，所有就需要生成一个假的验证，先看看 https 协议的效果。</span><br>
> <br>
> <span id='gonglian' style='font-size: 13px'> cd 到 /usr/local/nginx/https/ 目录下，生成证书。 </span><br>
>> <span style='font-size: 13px'> 1、创建私钥文件--命令为: <span id='gonglian' style='font-size: 13px'> openssl genrsa -des3 -out <span class="lan">server.key </span> 1024 </span></span><br>
>>> <span style='font-size: 13px'> 1.1会提示你输入私钥密码，如图下: </span><br>
>>> ![An image](/img/java/中间件/nginx/nginx-15.png)

>> <span style='font-size: 13px'> 2、创建签名证书文件--命令为: <span id='gonglian' style='font-size: 13px'> openssl req -new -key <span class="lan">server.key </span>  -out  <span class="lan">server.csr  </span>  </span>  </span><br>
>>> <span style='font-size: 13px'> 2.1这还不是目标证书，这里需要用到 <span class="lan">server.key </span> 私钥文件，但这个私钥有密码的它会提示你输入密码:</span><br>
>>> ![An image](/img/java/中间件/nginx/nginx-16.png)
>>> <span style='font-size: 13px'> 2.2接着会让你输入各种信息，按着说明输入即可: </span><br>
>>> ![An image](/img/java/中间件/nginx/nginx-17.png)

>> <span style='font-size: 13px'> 3、创建一个没有密码的私钥文件--命令为:  <span id='gonglian' style='font-size: 13px'> openssl rsa -in <span class="lan">server.key </span> -out  <span class="lan">server_nopass.key</span>  </span>  </span><br>
>>> <span style='font-size: 13px'> 3.1这个就是把有密码的私钥文件复制一份，但剔除密码，但还是提示你输入密码:  </span><br>
>>> ![An image](/img/java/中间件/nginx/nginx-18.png)


>> <span style='font-size: 13px'> 4、创建目标证书文件--命令为: <br><span id='gonglian' style='font-size: 13px'> openssl x509 -req -days 365 -in <span class="lan">server.csr </span>  -signkey  <span class="lan">server_nopass.key </span>  -out <span class="lan"> server.crt </span></span>  </span><br>
>> ![An image](/img/java/中间件/nginx/nginx-18.png)

#### <div class="biaoti2"></div> 配置 server 的 https
<br>

<div class="nginx-body">

<div style='font-size: 13px;'>
http{<br><br>


<div class="nginx-div">

<div style='font-size: 13px;'>
server{
<br><br>
<span>
<img class="nginx-img">listen  <span class="hong">80</span>;
<span id='gonglian' style='font-size: 13px'></span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">www.guomingcheng.com</span>;
<span id='gonglian' style='font-size: 13px'></span><br>
</span><br>

<span>
<img class="nginx-img">rewrite ^/  <span class="hong">https://www.mingcheng.com:443</span> <span class="lan">redirect</span>;
<span id='gonglian' style='font-size: 13px'># 让用户服务 http 时重定向到 https 中</span><br>
</span>




<div class="nginx-div">
<div style='font-size: 13px;'>

location ~ /(.*)\.(html|js|css|jpg|jpeg|png|gif)${ <span id='gonglian' style='font-size: 13px'>//url 的后缀只要是书写的都能匹配</span><br>

<span>
<img class="nginx-img">root  <span class="hong">html/static</span>;
</span><br>

<span>
</span>}
</div>

</div>

}

</div>

<div style='font-size: 13px;'>
server{
<br><br>
<span>
<img class="nginx-img">listen  <span class="hong">443 ssl</span>;
<span id='gonglian' style='font-size: 13px'>//https 协议默认监听的是 443 端口</span><br>
</span>
<span>
<img class="nginx-img">server_name  <span class="hong">www.guomingcheng.com</span>;
<span id='gonglian' style='font-size: 13px'>//表示监听那个域名</span><br>
</span><br>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'># 证书文件，</span><br>
<img class="nginx-img">ssl_certificate     <span class="hong">/usr/local/nginx/https/server.crt</span>;<br>
</span>

<span>
<img class="nginx-img"><span id='gonglian' style='font-size: 13px'># 服务器私钥文件</span><br>
<img class="nginx-img">ssl_certificate_key  <span class="hong">/usr/local/nginx/https/server_nopass.key</span>;<br>
</span>

<div class="nginx-div">
<div style='font-size: 13px;'>

location ~ /(.*)\.(html|js|css|jpg|jpeg|png|gif)${ <span id='gonglian' style='font-size: 13px'>//url 的后缀只要是书写的都能匹配</span><br>

<span>
<img class="nginx-img">root  <span class="hong">html/static</span>;
</span><br>

<span>
</span>}
</div>

</div>

}

</div>
</div>
}
</div>

</div>

#### <div class="biaoti2"></div> 以上所有步骤都配置好了，但需要注意俩点，如下
>> 1、确认是开发 443 端口，端口开发参考教程:  <a href="https://jingyan.baidu.com/article/5552ef4796f55e518efbc94f.html" target="_blank">Centos-7 开放端口</a><br>
>> 2、在 https 协议传输的文件，不能使用 ajxa 请求 http 协议的数据