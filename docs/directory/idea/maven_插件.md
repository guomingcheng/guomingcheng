::: tip 下载仓库
http://maven.apache.org/download.cgi
:::
解压后以下目录:
- bin--------------------------包含了Maven 的运行脚本文件
- boot-------------------------Maven 的依赖的类加载器 
- conf-------------------------Maven 的全局配置文件，定制 Maven 的运行行为
- lib--------------------------依赖的 jar 包

<br>
<br>

::: tip 环境变量配置
找到电脑 > 右键属性 > 高级系统设置 > 环境变量
:::
- path=D:\解压后的maven路径\bin
- MAVEN_HOME=D:\解压后的maven路径 <br>
 
进入命令行窗口，输入 mvn -v 。如果显示版本号，那么表明配置成功了

<br>
<br>

::: tip 配置本地 Maven 仓库与阿里云镜像
找到我们下载的 maven 存放路径，进入 conf 目录复制 settings.xml 文件
:::

1、把复制的 settings.xml 粘贴到图片指定的 .m2 目录下 
![An image](/img/idea/maven/微信截图_20190628210527.png)
2、修改 .m2 目录下的 settings.xml 文件，把以下内容替换掉原文件内的内容
``` js{4}
<?xml version="1.0" encoding="UTF-8"?>

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <!-- 配置本地仓库的路径，当指定一个目录的路径后，以后从远程仓库下载的 jar 包都是在配置的目录中-->
  <localRepository>D:/MySQL/apache-maven-3.6.0/maven</localRepository>

  <pluginGroups>
  </pluginGroups>
  <proxies>
  </proxies>
  <servers>
  </servers>
  <mirrors>
     <!-- 配置阿里云镜像 -->
    <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    </mirror>
    
  </mirrors>
  <profiles>  
  </profiles>

</settings>

```