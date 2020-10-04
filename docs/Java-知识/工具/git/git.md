## 初识
#### <div class="biaoti2"></div> git 是一个优先的分布式版本管理工具
> <span id='gonglian'> 一个成熟的项目生命周期需要经过每个版本迭代与开发周期需要多人共同协作。如果使用人工来管理每个步骤，那必会很麻烦，而 git 出现就会让我们项目管理和多人协作变的轻松了。</span>
>>git 是一个开源的分布式版本控制管理系统，主要作用于团队的协作开发，并且 git 的版本管理是在本地就可以控制，而不需要联网，不像 svn 那样要连接着服务器，还有优秀的分支管理机制。优点还有如：完整性的保障、分支操作非常流畅、与 Linux 命令全面兼容

## 三点概念
#### <div class="biaoti2"></div> git 主要工作流畅工作区、暂存区、本地库
::: tip 工作区
>工作区是一个目录，也是我们在编写代码的地方. 可以使用 <span class="hei"> git add </span> 把文件提交到暂存区，
:::

::: tip 暂存区
> 用于临时存储工作区提交的文件，暂未提交到本地库，可以撤回文件。可以使用 <span class="hei"> git commit </span> 把存储的文件提交的本地库
:::

::: tip 本地库
> 保存每次历史提交的文件版本，可以回退到某个版本的文件

:::


## 开始
#### <div class="biaoti2"></div> 使用 git 命令进行实践
>先进入一个目录下，这个目录也是工作区。打开 git Bash 命令行窗口. 在这里 CatWord 目录就是我的工作区
>> ![An image](/img/java/工具/git/git-02.png)

> <span id='gonglian'>初始化工作区: </span> <br>
>>使用命令: <span class="hei">git init</span> 。当工作区的目录初始化后，才可以进行接下来的操作。当出现: Initialized empty Git repository  表示已在工作区初始化一个空的版本库。
>> ![An image](/img/java/工具/git/git-03.png)

## 设签名
#### <div class="biaoti2"></div> 签名是一个终端的身份证
> <span id='gonglian'>签名: </span> <br>
>> 协同开发，每一个开发人员向远程代码托管中心 push 时，那就无法辨别是哪个开发人员 push 的。设置签名的作用是区分每个终端 push 代码的标识，签名的格式如下:
>><br> <span id='gonglian'> 用户名：</span>mingcheng 
>><br> <span id='gonglian'> Email 地址 : </span> 184761029@163.com

> <span id='gonglian'>签名级别: </span>
>>项目级别: <br>仅在当前工作区本地库生效, 使用命令是: <span class="hei">git config</span><br>
>>![An image](/img/java/工具/git/git-04.png)
>>签名设置后，git 会把签名的信息保存在当前目录下的 .git/config 文件里，打开查看设置的信息。
>>
>><br>系统级别: <br>登录当前操作系统的用户范围, 使用命令是: <span class="hei">git config --global</span> ，系统级别的多了一个 --global 参数。
>>![An image](/img/java/工具/git/git-06.png)
>>设置系统的签名后，也有一个文件保存中，是在当前系统的用户目录下的 .gitconfig 如: C:\Users\Administrator\ .gitconfig 文件

> <span id='gonglian'>签名优先级: </span> <br>
>>就近原则，项目级别优先于系统用户级别的，二则有时采用项目级别的，没有是才采用系统用户级别的。二者都没有将不能 push 到远程代码托管仓库


## 忽略文件与目录
> <span id='gonglian'> 当我们使用 git 来管理项目的资源时，有些文件或目录是不需要提交到远程仓库的，所以需要使用 git 提供的机制来排除这些文件目录。</span>
>> 在项目的目录下或者是与 .git 目录同级创建一个 .gitignore 文件，在这个文件中添加需要配置的文件与目录，使用相对路径就可以了
>>![An image](/img/java/工具/git/git-38.png)

## 基本操作
#### <div class="biaoti2"></div> 使用 git 命令来完成一个管理文件的基本操作
> <span id='gonglian'>提交文件: </span> <br>
>> <span class="hei">git status : </span> <br>
>> 查看当前分支、暂存区的状态、本地库的状态
>><br><br>
>> <span class="hei">git add [file name] : </span> <br>
>> 把新增的文件添加到暂存区中，文件的修改也是使用该命令把文件添加到暂存区中。而暂存区的文件是可以测回。
>><br><br>
>> <span class="hei">git commit -m "提交代码注释" [file name] : </span> <br>
>> 把暂存区的文件提交到本地库, 提交后一不可修改，将会作为本地库的历史版本
>><br><br>

> <span id='gonglian'>查看提交的历史版本: </span> <br> 
>> <span class="hei">git log : </span> 携带参数后 <span class="hei">git log --pretty=oneline </span> 每次的提交以一行显示<br>
>> 查看全部提交到本地库文件的历史版本
>>![An image](/img/java/工具/git/git-07.png)
>><br><br>
>> <span class="hei">git reflog : </span> <br>
>> 也是查看本地库的历史版本，不过有显示指针编号，可以版本切换提供有用的参考
>>![An image](/img/java/工具/git/git-08.png)

> <span id='gonglian'>切换历史版本: </span> <br> 
>> <span class="hei">git reset --hard [hash_value] : </span><br>
>> 根据本地库的提交历史的哈希值来切换到对应的版本, 不分前后，只要有哈希值各种姿势都可以
>>![An image](/img/java/工具/git/git-09.png)
>><br><br>
>> <span class="hei">git reset --hard HEAD~[value] : </span><br>
>> 同样式切换历史版本，不过这个只能往后面退， ~ 波浪线后跟着数值是几，就往后退几个版本 
>>![An image](/img/java/工具/git/git-10.png)

> <span id='gonglian'>找回删除的文件: </span> <br> 
>> 如果工作区的文件删除，以提交到本地库。当想找回时、那么可以通过版本切换来找回文件<span id="gonglian">[前提是被删除的文件有历史记录]</span>。因为每一次 commit 都会被
>> git 作为一个历史记录，不可磨灭的。除非删除了本地库。
>><br><br>
>> 如果工作区的文件删除，以提交到暂存区还未 commit 到本地库。可以使用指针 <span class="hei">git reset --hard HEAD</span> 指向当前的版本，将会刷新当前版本最初的状态
>><br><br>
>> 如果工作区的文件删除，未提交到暂存区与本地库。那么使用命令: <span class='hei'>git checkout -- [找回的文件名]</span> 就可以找回删除的文件了

> <span id='gonglian'>比较文件的差异: </span> <br> 
>> <span class="hei">git diff [fileName] : </span><br>
>> 这个是把工作区的 fileName 文件与暂存区的 fileName 文件对比
>><br><br>
>> <span class="hei">git diff HEAD [fileName] : </span><br>
>> 这个是将工作区的 fileName 文件与本地库的某个历史版本的 fileName 文件对比

## 分支管理
#### <div class="biaoti2"></div> 分支可以让多人协同并行开发
> <span id='gonglian'>创建分支: </span> <br> 
>> <span class="hei">git branch -v : </span><br>
>> 查看所有分支, 会显示所有的分支。绿色的表示当前所在的分支
>>![An image](/img/java/工具/git/git-11.png)
>><br><br>
>> <span class="hei">git branch [分支 name]: </span><br>
>> 创建分支，分支的名称是 hot_fox。把当前 master 分支的历史版本记录也会复制一份到新的 hot_fox 分支中
>>![An image](/img/java/工具/git/git-12.png)

> <span id='gonglian'>切换分支: </span> <br> 
>> <span class="hei">git checkout [分支 name]: </span><br>
>> 切换分支，从当前的 master 分支切换到 hot_fox 分支。在 hot_fox 的任何操作都不会影响到 master。相反同理
>>![An image](/img/java/工具/git/git-13.png)

> <span id='gonglian'>合并分支: </span> <br> 
>> <span class="hei">git merge [被合并的分支 name]: </span><br>
>> 合并分支，比如我想把 hot_fox 分支上的内容合并到 master 主分支上，那么就需要切换到 master 分支。执行合并的命令 <span class="hei">git merge hot_fox </span>
>>![An image](/img/java/工具/git/git-14.png)

> <span id='gonglian'>解决合并分支的冲突: </span> <br> 
>> 当和并分支时，俩个分支的终端同时修改了相同的文件，那么合并就会产生冲突，如下面这样，冲突的出现需要手动解决
>>![An image](/img/java/工具/git/git-15.png)
>> 需要自己打开冲突的文件，把冲突的标志删除，与修改文件的终端商量如何修改。
>>![An image](/img/java/工具/git/git-16.png)
>> 修改文件后，把冲突的文件 commit 到本地库就解决冲突了。不过需要注意，commit 这次不需要加文件名参数
>>![An image](/img/java/工具/git/git-17.png)

## 推送到 github
> <span id='gonglian'>与 github 建立连接: </span> <br><br>
> <span id='gonglian'> github 是一个代码托管中心，他是与 git 同一个大神开发。可以去 github 注册一个账号，再创建一个仓库。这个仓库与 git 终端建立连接，把本地代码托管到 github 仓库上。 </span> <br>

> <span id='gonglian'>定义别名: </span> <br>  
>> <span class="hei">git remote add [别名变量] [仓库地址]: </span><br>
>> 定义别名，add 表示添加一个别名， orgin 是别名的变量， https://github.com/guomingcheng/new.git 是仓库地址
>>![An image](/img/java/工具/git/git-18.png)
>> <br><br>
>> <span class="hei">git remote -v : </span><br>
>> 查看别名。查看在 git 本地使用的所有别名，这个别名就相当于 java 变量，不过定义好了就不会销毁，除非删除 git 本地库
>>![An image](/img/java/工具/git/git-19.png)

> <span id='gonglian'>push 到 github: </span> <br>  
>> <span class="hei">git push [仓库远程地址] [推送的分支]: </span><br>
>> roigin 是远程的仓库的地址，master 是推送的分支到 github 仓库上。推送前需要注意的有: 是否已设置签名，这是不可缺的。
>>![An image](/img/java/工具/git/git-20.png)

## 团队协作开发
#### <div class="biaoti2"></div>  在协作开发，一个团队都有读写权限。但需要被邀请
>  <span id='gonglian'>当团队个人把项目 clone 克隆下了，可以接着开发，但是无法 push 提交，需要创建 github 仓库的员人的邀请该开发员人加入团队，这样才可以 push 上去。</span>

> 1、邀请方打开仓库页面，点击 Settings 
>>![An image](/img/java/工具/git/git-21.png)

> 2、进入 Settings 页面后，接着点击 Collaborators
>>![An image](/img/java/工具/git/git-22.png)

>3、进入 Collaborators 有如下界面，添加被邀请方的用户名。 点击 add
>>![An image](/img/java/工具/git/git-23.png)

>4、接着是以下面的操作，复制链接发给被邀请方。
>>![An image](/img/java/工具/git/git-24.png)

>5、被邀请方拿到链接后接着复制，在浏览器登录自己的 github 账号上去，再往地址栏中粘贴链接，出现一下界面。被邀请方点击同意后，那么该被邀请方就加入了团队，他就可以往仓库中 push 了。
>>![An image](/img/java/工具/git/git-25.png)


## 拉取 pull

> <span id='gonglian'>第一种拉取方式: </span> <br>  
>> <span class="hei">git pull [仓库远程地址] [远程仓库分支] : </span><br>
>> 这种从仓库拉取下的比较简洁。
>>![An image](/img/java/工具/git/git-26.png)

> <span id='gonglian'>第二种拉取方式: </span>   
> pull 命令是他们的集合，这种是先拉取，在合并的方式
>> <span class="hei">git fetch [仓库远程地址] [远程仓库分支] : </span><br>
>> 先从仓库下拉取资源
>>![An image](/img/java/工具/git/git-27.png)
>> <br><br>
>> <span class="hei">git merge [仓库远程地址/远程仓库分支] : </span><br>
>> 合并从仓库拉取下来的资源分支， fetch + merge = pull
>>![An image](/img/java/工具/git/git-28.png)

## 免密 push
> <span id='gonglian'>使用 SSH 的方式 pust : </span> <br>  
> 在前面的示列每次 push 到远程仓库时，都是使用的 http 请求的模式，这模式每次 push 都需要输入用户名与密码，这也很不方便。
> 所以这次使用 ssh 加密连接远程仓库，push 就不用输入用户名与密码，但是只能配置对一个 github 用户。
>> <span class="hei">ssh-keygen -t rsa -C ['github 用户的邮箱'] : </span><br>
>> 一路 Enter 就行了，在电脑用户目录下会生成一个 .shh 目录，.ssh 目录下有个 id_rsa.pub 文件，复制文件的内容，接着下一步
>>![An image](/img/java/工具/git/git-29.png)
>><br><br>
>> 进入 github 个人中心。进入 Settings/SSH and GPG keys ，会有下面的界面，点击 New SHH key 标题随便添加，把复制的内容填在下个框再确定就可以了。本地与 github 以建立了远程连接
>>![An image](/img/java/工具/git/git-30.png)
>><br><br>
>> 注意: 现在 push 远程仓库的路径以不是 http, 而是下面这种形式。
>>![An image](/img/java/工具/git/git-31.png)

## GitLab 环境搭建

#### 1、下载 gitlab 的安装包
> 不在 linux 上下载 gitlab 安装包，是安装包太大了。以防网络不顺畅而掉线，所我们现在 win 上下载，在把安装包上传到 linux 。下面链接就是下载 gitlab 安装包的：<br><br>
> <span id='gonglian'>https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-10.8.2-ce.0.el7.x86_64.rpm</span> <br>  
>> 打开链接后, 会出现包含以下的页面，直接点击下载即可。
>>![An image](/img/java/工具/git/git-32.png)

#### 2、上传 gitlab 的安装包到 linux 上
> 把安装包上传到 /opt/ 目录下
>>![An image](/img/java/工具/git/git-33.png)

#### 3、在 /opt 目录下创建一个 install.sh 可执行文件
> 在 install.sh 文件中添加以下内容, 保存退出: 
>```js
>
>sudo yum install -y curl policycoreutils-python openssh-server cronie
>sudo rpm -ivh /opt/gitlab-ce-10.8.2-ce.0.el7.x86_64.rpm
>sudo yum install lokkit
>sudo lokkit -s http -s ssh
>sudo yum install postfix
>sudo service postfix start
>sudo chkconfig postfix on
>curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
>sudo EXTERNAL_URL="http://gitlab.example.com" yum -y install gitlab-ce
>
>```
>> 退出后，把 install.sh 文件设置成可执行文件，命令如: <span id='gonglian'> chmod 775 install.sh </span>
>>![An image](/img/java/工具/git/git-35.png)

> 执行 install.sh 可执行文件：
>> 执行 <span id='gonglian'> ./insatll.sh </span>可执行文件，如出现下面的图标，表示安装顺利了。但要把电脑重启一下
>>![An image](/img/java/工具/git/git-36.png)

#### 4、初始化配置文件。
> 使用命令：<span id='gonglian'>gitlab-ctl reconfigure</span>
>> 如果初始化配置后末尾出现一下内容，那么就成功了。否则就是 install 有问题
>>![An image](/img/java/工具/git/git-37.png)

#### 5、防火墙、启动 gitlab、访问 gitlab 网站
>1、关闭掉防火墙: 
>> <span id='gonglian'>service fiewalld stop</span>

>2、启动 gitlab: 
>><span id='gonglian'>gitlab-ctl start</span>

>3、访问 ip 就可以了。默认 80 端口
