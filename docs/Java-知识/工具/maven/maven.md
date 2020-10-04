## 简介
#### <div class="biaoti2"></div>  maven 是用来构建项目与简化 jar 包的管理
> <span id='gonglian'> maven 是一款服务于 java 平台的自动化构建工具，对于一个大工程的项目使用 maven 来管理也是很方便的，因为 maven 可以创建多个子项目。maven 也统一了 jar 依赖。</span>

## 安装教程
#### 1、检查是否安装 jdk
> maven 是使用 java 编写的自动化工具，所以 maven 运行需要 jre 环境

#### 2、下载安装包
> 打开路径下载 : <span id='gonglian'> https://maven.apache.org/download.cgi </span>
>> 压缩包下载后，解压在一个目录即可。
>>![An image](/img/java/工具/maven/maven-01.png)

#### 3、配置环境变量
> 在 <span id='gonglian'> 电脑右键进入/高级系统设置/用户环境变量</span> 中设置以下内容。
>> MAVEN_HOME=C:\EnvironmentalScience\apache-maven-3.6.1   <span id='gonglian'> # 这个我解压 maven 后的路径</span>
>> <br> path=C:\EnvironmentalScience\apache-maven-3.6.1\bin  <span id='gonglian'> # 如同</span>

#### 4、检查 maven 环境配置是否成功
> 命令: <span id='gonglian'> mvn -v </span>