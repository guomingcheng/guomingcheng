<h2 id='biaoti'>在 IDEA 中安装 mybatis Plugin 破解版</h2>
<h5 id='zhuyi'>注意：本教程只支持 idea-2018 版本</h5>

::: tip 先下载文件
链接：https://pan.baidu.com/s/1l3hT-9OWnBFoIiJ6Y9B5YA <br>
提取码：6kwm
:::
<br>
<br>

::: tip 第一步：点击 Install plugin from disk 本地安装
我们先打开 IDEA 开发工具进入 > Settings > Plugins > 点击本地安装
:::
![An image](/img/idea/微信截图_20190626152857.png)

<br>
<br>

::: tip 第二步：选择 mybatis_plugins.zip 压缩文件
找到下载的文件，解压后会有以下俩个目录，我们要选择 mybatis_plugins.zip 
文件进行安装。 mybatis_plugins 目录下的内容后面会用到。<br>

- mybatis_plugins
- mybatis_plugins.zip 
:::
安装时 idea 会关闭窗口，等安装完成时 idea 会自动的弹出窗口。到时我们先把窗口关掉。 
![An image](/img/idea/微信截图_20190626153912.png)

<br>
<br>

::: tip 第三步：找到 mybatis-plugin
我们要找到 C 盘 > 用户 > TongFanPC > .IntelliJIdea2018.2(我安装的是 2018.2 版本的，你要找的你 相应的版本) > config > plugins 目录下找到 mybatis-plugin
:::
![An image](/img/idea/微信截图_20190626155157.png)

<br>
<br>

::: tip 第四步：打开替换 seventh7 文件夹的目录
接着打开 mybatis-plugin > lib 目录，你会看到三个 jar 包。但有一个 mybatis_plus.jar 
包需要我们修改 ,直接用解压工具打开如下，进入 com 文件目录，有个 seventh7 需要我们替换掉。
:::
![An image](/img/idea/微信截图_20190626160614.png)

<br>
<br>

::: tip 第五步：替换掉 seventh7 文件夹
找到我们下载的文件，解压后会有 mybatis_plugins 文件夹进入 > MybatisPlugin > v2.7~2.91 > com 目录，复制 seventh7
 文件夹替换掉 《第四步的 seventh7 文件夹》。在执行之前确保 idea 是关闭的
:::
![An image](/img/idea/微信截图_20190626161638.png)
![An image](/img/idea/微信截图_20190626162237.png)

<h2>以上就是 mybatis 插件在 idea 安装的步骤</h2>