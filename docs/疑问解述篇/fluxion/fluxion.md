# <div class="center">fluxion 6.9 的疑问总结</div>

## 无法启动
#### <span class="biaoti2"></span> <span class="red">运行 ./fluxion.sh 后无法显示主页面</span>

> #### 出现这样的页面
>> ![An image](/img/解述篇/fluxion/fluxion-1.png)

> #### 而不是这样的
>> ![An image](/img/解述篇/fluxion/fluxion-2.png)

#### <span class="biaoti2 lu" ></span> <span class="span-lu">原因与解决方法</span>
> #### 因为当前下载的安装包，已出现损坏了。需重新下载，还是如此就是下载的链接是有问题的，最好是用官方链接，如下:
>> https://github.com/FluxionNetwork/fluxion.git

## DHCPD 装不了
#### <span class="biaoti2"></span> <span class="red">对于 dhcpd 服务安装不了</span>
> #### 出现下面的情况
>> ![An image](/img/解述篇/fluxion/fluxion-3.png)

#### <span class="biaoti2 lu" ></span> <span class="span-lu">原因与解决方法</span>
> #### 因为在 liunx 上提供 dhcpd 服务的安装包名称为 isc-dhcp-server 而不是 dhcpd，所以下载的命令应该如下才对：
>> apt-get install isc-dhcp-server –y


## pyrit 装不了
#### <span class="biaoti2"></span> <span class="red">对于 pyrit 安装不了</span>
> #### 出现下面的情况
>> ![An image](/img/解述篇/fluxion/fluxion-4.png)

#### <span class="biaoti2 lu" ></span> <span class="span-lu">原因与解决方法</span>
> #### 因为当前的源没有包含 pyrit 的安装包，所以需要在 /etc/apt/sources.list 更换，替代的源如下: 而要使用 apt-get update 更新源
>>```xml
>>deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
>>deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
>>
>>deb http://mirrors.ustc.edu.cn/debian/ buster main contrib non-free
>>
>>deb http://mirrors.ustc.edu.cn/debian/ buster-updates main contrib non-free
>>
>>deb http://mirrors.ustc.edu.cn/debian/ buster-backports main contrib non-free
>>
>>deb http://mirrors.ustc.edu.cn/debian-security buster/updates main contrib non-free
>>```

## 无法加入网络
#### <span class="biaoti2"></span> <span class="red">伪 AP 建立了，但无法加入网络</span>

#### <span class="biaoti2 lu" ></span> <span class="span-lu">原因与解决方法</span>
> #### 因为在这个步骤选择了网卡，这个应该是 bug 存在于 6.9 与 5.9 的版本 ,所以在这个步骤应该选择【跳过】，如下图
>> ![An image](/img/解述篇/fluxion/fluxion-5.png)

>
## 真密码提示错误
#### <span class="biaoti2"></span> <span class="red">钓鱼网页输入真密码，后台显示不正确</span>
>> ![An image](/img/解述篇/fluxion/fluxion-6.png)

#### <span class="biaoti2 lu" ></span> <span class="span-lu">原因与解决方法</span>
> #### 因为 fluxion 不支持在别的途径抓到的 cap 文件，只支持通过 fluxion 来抓到的包，才能避免输入真密码也提示错误的问题，但还有一点，fluxion 程序退出后只能重新抓包不能使用上次抓的包，不然还是真密码错误的问题


## AP 建立几分钟断开 
#### <span class="biaoti2"></span> <span class="red">伪 AP 建立后，一切正常，但几分钟后自动挂掉</span>

#### <span class="biaoti2 lu" ></span> <span class="span-lu">原因与解决方法</span>
> #### 这应该是 fluxion 6.9 版本的问题，我换成了 5.9 的版本这个问题就好了。下面是 5.9 安装包的链接：
