## 简介
#### <div class="biaoti2"></div> springBoot 是要解决 javaEE 一站式的解决方案而孕育而生
> <span id='gonglian'> 在开发 javaEE 项目时，使用当前优秀 ssm 开源框架作为基础。但是，无论项目大小当创建时都不可避免编写繁多的 xml 配置文件，而 springBoot 出现就是解决这方面的问题，能让我们快速的创建 javaEE 项目。</span>
>> springBoot 是在 spring-4.0 的基础之上进行开发的，主要是简化 javaEE 的复杂的配置文件。创建 springBoot 应用后，只要导入相关的启动器，springBoot 就会帮我们整合相应的功能了 

## 核心配置文件
> 在 springBoot 中的核心文件有俩种格式，一种是 application.properties 文件已 .properties 后缀结尾的。
> 另一种是 application.yml 文件，这是新文件格式，面向数据的。也有新的写法
>> application.yml 
>>```properties
>>server:            # value 值前面一定要有一个空格, 这种数据格式是以树形的方法书写的
>>    port: 8080
>>```

#### <div class="biaoti2"></div> 在核心配置文件中配置系统属性变量与值
> <span id='gonglian'> 1、添加属性映射配置提示启动器的 jar 包</span>
>> 添加该 jar 包后，在配置文件中写属性与值时会有提示信息的。
>>``` xml   
>>  <dependency>
>>      <groupId>org.springframework.boot</groupId>
>>      <artifactId>spring-boot-configuration-processor</artifactId>
>>      <optional>true</optional>
>>  </dependency>
>>```

> <span id='gonglian'> 2、类的属性与配置文件的属性进行绑定</span>
>> 能达到双方绑定需要使用 @ConfigurationProperties 注解，该注解声明了当前组件类与配置文件有了关联。prefix 的值
>> 是属性的前缀。如属性配置: <span id='gonglian'>person.name=guomingcheng</span>, 当前类交给 spring 管理后会自动把配置文件的值映射到 name 属性中
>>``` java
>>@Data
>>@Component
>>@ConfigurationProperties(prefix = "person")
>>public class HelloContorller {
>>
>>    public String name;
>>    private Boolean isBoos;
>>    private Map<String , Object> maps;
>>    private List<String> list;
>>}
>>```

> <span id='gonglian'> 3、application.yml 配置文件属性值书写格式:</span>
>>在这个配置文件书写的属性与值得格式也是与第 2 步关联的
>>``` properties
>>person:
>>    name: guomingcheng
>>    isBoos: true
>>    maps: {key1: key1, key2: key2 }   # Map 类的格式与 JavaBean 类的格式一样
>>    list:        # 这是集合的书写格式
>>      - ren
>>      - siwan
>>
>>```

## 随机数与占位符
> <span id='gonglian'> 随机数是 spring boot 提供的一些语法在配置文件中使用，一共有三种如下格式: </span>
>> 在主配置文件中的随机数语法
>>``` yml
>>person:
>>    number: ${random.int(10)} # 代表整数随机数 1 到 10 之间获取一个值，如没参数，那么就会随意生成一个随机值
>>    uuid: ${random.uuid}         # 是获取一个随机字符串。
>>    uuid_number: ${random.value}       #可以随机获取数字与字符组合的随机数
>>```

> <span id='gonglian'> 占位符也是 spring boot 提供的一种语法在配置文件中使用，一共有俩种如下格式: </span>
>>``` yml
>>person:
>>    uuid: ${random.uuid}         # 是获取一个随机字符串。
>>    uuidName: ${person.uuid}         # 将 person.uuid 的值赋值给 person.uuidName 
>>    uuuidIsName: ${person.uuid: guomingcheng} # 如如果 person.uuid 为 null ,才使用  guomingcheng 值
>>```

## 多环境配置
> <span id='gonglian'>  在项目的开发周期中，一般都需要多种环境配置(这个环境配置就是数据库等等的配置信息)如：生产环境、测试环境、上线环境。这些都涉及到配置都不相同，所有根据不同的环境切换不同的配置。这个在 spring boot 中也提供了解决方案。</span>
>> <span id='gonglian' style="font-weight: bold">  主配置文件: application.yml</span>
>> <br> 因为在 spring boot 启动后，会自动加载 application.yml 或者 application.properties 文件，需要根据下面的配置指定来激活那个环境
>>``` yml
>>spring:
>>  profiles:
>>    active: dev
>>```
>><br><br>
>> <span id='gonglian'  style="font-weight: bold"> 子环境配置文件的书写格式如下:</span> <br>
>> 文件名的格式都是这样写: application-dev.yml , 横杆 - 后跟着字符串就是当前环境的名称。主配置文件就是根据这个名称来激活指定的环境。

> 当项目打成 jar 时也是可以通过命令来切换环境的：<br>
> java -jar springboot-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev

## logback 日志的配置
#### <div class="biaoti2"></div> 在 springBoot 中日志的基础配置

> <span id='gonglian'>  在 springBoot 中也是统一了所有框架使用了 logback 日志。内部也是排除其他框架的依赖的日志，使用适配器模式的做一个适配层。在 springBoot 中也是只需要关心日志的配置即可，logback 依赖的 jar 也被 springBoot 添加了</span>
>> log 在 springBoot 配置说明:
>>
>>``` yml
>>logging:
>>  level: { com.guomingcheng.springboot: info }  # springBoot 默认的日志级别是 info. 使用包控制日志的级别, 这是 map 集合可以多个值
>>    #root: debug   # 设置整个项目的日志, 不建议使用, 建议使用包日志控制的
>>  #file: D:/springBoot/springBoot.log  # 指定一个文件的路径, 日志就会输出到这个文件里的
>>  path: D:/spring/log  # 指定一个目录的路径, springBoot 默认在这个目录下生成一个 spring.log 文件. 日志会输出到这个文件中, 优先级小于 file
>>  pattern:
>>    console:                # 指定控制台日志输出的格式
>>    file:                   # 指定日志输出到文件中的格式
>>```

> <span id='gonglian'> 在 springBoot 中，我们也可以使用 logback.xml 配置文件来配置日志的信息。只需要把 logback.xml 添加到 resources 资源目录下即可。日志框架就会扫描到配置文件，就是不会加载 springBoot 配置文件里面的配置了</span>
>>![An image](/img/java/框架/springBoot/springBoot-01.png)

#### <div class="biaoti2"></div> 在 springBoot 中 logback 日志配置的高级特性
> <span id='gonglian'> 在 springBoot 建议 logback 的配置文件名为 logback-spring.xml，这不会被 logback 框架识别。因为该名称的日志配置文件可以使用 springBoot 提供的高级功能，也是由 springBoot 来解析配置的内容。</span>
>>  注意: 文件名必须是 logback-spring.xml <br>
>> 使用 springBoot 提供的功能, 这个功能就是根据项目的环境来切换对应的日志输出格式。
>>``` xml
>><appender name="stdout" class="ch.qos.logback.core.ConsoleAppender">
>>    <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
>>        <level>DEBUG</level>   <!-- trace、debug、info、warn、error  -->
>>    </filter>
>>
>>    <!-- 核心配置, 这至少配置俩种环境以上, 如果没有环境都不匹配, 那么就会报错--> 
>>    <layout class="ch.qos.logback.classic.PatternLayout">
>>        <springProfile name="dev">
>>            <pattern>%d [%thread] ---------------------- %-5level %logger{36} [%file : %line] - %msg%n</pattern>
>>        </springProfile>
>>        <springProfile name="!dev">
>>            <pattern>%d [%thread] ---HHHHHHHHHHH--- %-5level %logger{36} [%file : %line] - %msg%n</pattern>
>>        </springProfile>
>>    </layout>
>>
>></appender>
>>
>>```

## 静态资源映射

#### <div class="biaoti2"></div> 静态资源以 jar 包的方式引入
> <span id='gonglian'>  在使用 springBoot 做 web 开发中，前端的第三方 .js 文件可以以 jar 的方式引入项目中。springBoot 为这些第三方的静态资源开放出一个接口，那个页面要引用这些静态资源，就根据开放接口格式引入即可</span>
><br><br>
> 在这个网站上有前端 .js 的 maven 依赖标签: <span id='gonglian'> https://www.webjars.org/ </span>
>> 在 springBoot 定义中凡是以 /webjsrs/** 的 url 控制层处理不了的都在 META-INF/resources/webjars/ 这个路径下找静态资源 
>><br><br>
>> 列如请求 URL 是 : <span id='gonglian'>http://127.0.0.1:8080/webjars/jquery/3.0.0/jquery.js </span> <br>
>> 那么就会找到图片中的静态资源，这个资源就是以 jar 包引入的
>> ![An image](/img/java/框架/springBoot/springBoot-02.png)

#### <div class="biaoti2"></div> 静态资源关系映射
> <span id='gonglian'> springBoot 为静态资源页面中定义了几个目录，只要把 html 文件存放在这些目录中，当控制层处理不了请求时。会在这些目录下根据 url 匹配资源并返回</span>
>> 在 springBoot 定义中凡是以 <span id='gonglian'> /** </span> 的 url 控制层处理不了的都会在下面这些目录匹配资源:
>> ![An image](/img/java/框架/springBoot/springBoot-03.png)

>  <span id='gonglian'> 自定义静态资源目录：</span>
>> 注意: 当在配置文件中自定义静态资源目录后，springBoot 默认的静态资源目录就会失效。但是也是可以配置多个目录的
>>``` properties 
>>spring.resources.static-locations=classpath:/static
>>spring.mvc.date-format=
>>```

## mvc 默认与扩展
#### <div class="biaoti2"></div> 在 springBoot 默认配置上扩展或者全面托管
> <span id='gonglian'>在 springBoot 自动装配 n 组件时，会先到容器中查看用户是否自己配置 @Configuration 类，类型为该组件配置类的类型。如果有就使用用户的，否则就使用自动装配。</span>
><br><br>
> <span id='gonglian'>但该组件的配置类类型可以有多个的话，那么 springBoot 就的默认的配置与用户的配置会组合起来。用户的配置就是在默认的配置进行扩展，而 WebMvc 就是可以扩展的组件。</span>
>> <span id='gonglian'> 在默认配置上扩展</span><br>
>> 想要扩展时, 编写一个配置类，类型为 WebMvcConfigurer。可根据该接口的方法进行扩展想要的功能
>>``` java
>>@Configuration
>>public class MvcConfig implements WebMvcConfigurer {
>>
>>   /**
>>    *  配置 Controller 转发到一个静态页面
>>    */
>>   @Override
>>   public void addViewControllers(ViewControllerRegistry registry) {
>>       registry.addViewController("/hello2").setViewName("/hello.html");
>>   }
>>   /**
>>    *  设置静态资源映射配置
>>    */
>>   @Override
>>   public void addResourceHandlers(ResourceHandlerRegistry registry) {
>>       registry.addResourceHandler("/mingcheng/**")
>>               .addResourceLocations("classpath:/mingcheng/");
>>   }
>>}
>>```
>> <br><br>
>> <span id='gonglian'>全面托管不使用默认配置</span> 
>> <br> 只要在配置类上添加 @EnableWebMvc 注解，那么 springBoot 的为 springMvc 默认配置就会全部失效。只采用用户这个配置类的配置
>>``` java
>>@EnableWebMvc
>>@Configuration
>>public class MvcConfig implements WebMvcConfigurer {
>>
>> 
>>}
>>```

## 注册 Tomcat 三大组件
>  <span id='gonglian'>在使用 ssm 的时候外部容器技术时，我们是可以通过在 web.xml 文件中注册三大组件的。但是在 springBoot 中是使用嵌入式的 tomcat, 如有需要注册三大组件时。springBoot 也提供了对应的策略。</span>
>> <span id='gonglian'> 注册 servlet(服务) 组件: </span>
>> <br> 和原生开放一样，MyServlet 继承 HttpServlet。通过下面配置注册 servlet 服务。
>>```js
>>@Configuration
>>public class MyTomcatConfig {
>>
>>    @Bean
>>    public ServletRegistrationBean myServlet(){
>>        ServletRegistrationBean registrationBean =            //当前 servlet 的路径映射 
>>                new ServletRegistrationBean(new MyServlet()  , "/ming", "/cheng");
>>        return registrationBean;
>>    }
>>
>>}
>>```
>><br><br>
>><span id='gonglian'> 注册 filter(过滤器) 组件:</span><br>
>> 注册过滤器需要 MyFilter 继承于 Filter
>>```java 
>>@Configuration
>>public class MyTomcatConfig {
>>
>>    @Bean
>>    public FilterRegistrationBean myFilter(){
>>        FilterRegistrationBean RegistrationBean = new FilterRegistrationBean();
>>        RegistrationBean.setFilter(new MyFilter()); //注册 Filter 注解
>>        RegistrationBean.setUrlPatterns(Arrays.asList("/ming", "/cheng"));  // 映射请求
>>        return RegistrationBean;
>>    }
>>}
>>
>>```
>><br><br>
>><span id='gonglian'> 注册 Listener(监听器) 组件:</span><br>
>>这个是可以注册所有的监听事件，但是现在的 MyListener 类是实现 ServletContextListener 接口。表示监听嵌入式的 tomcat 启动与销毁
>>```java 
>>@Configuration
>> public class MyTomcatConfig {
>>
>>     @Bean
>>     public ServletListenerRegistrationBean myListener() {
>>         ServletListenerRegistrationBean<MyListener> listenerRegistrationBean =
>>                 new ServletListenerRegistrationBean<>(new MyListener());
>>         return listenerRegistrationBean;
>>     }
>>}
>>```

## Druid 配置
#### 1、添加核心依赖的 jar 

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.16</version>
</dependency>

<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.0</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.11</version>
</dependency>

```

### 2、在 yml 的配置文件中配置一下属性
```yml
spring:
   datasource:
     username: root
     password: gmC24354.
     url: jdbc:mysql://127.0.0.1:3306/ruiyue?characterEncoding=utf-8&serverTimezone=GMT%2B8&useSSL=false
     type: com.alibaba.druid.pool.DruidDataSource
     driver-class-name: com.mysql.cj.jdbc.Driver

     # druid 数据的属性配置
     initialSize: 5
     minIdle: 5
     maxActive: 20
     maxWait: 60000
     timeBetweenEvictionRunsMillis: 60000
     minEvictableIdleTimeMillis: 300000
     validationQuery: SELECT 1 FROM DUAL
     testWhileIdle: true
     testOnBorrow: false
     testOnReturn: false
     poolPreparedStatements: true

     # 配置监控统计拦截的 filters, 去掉后监控界面 sql 无法统计, 'wall' 用于防火墙
     filters:
       commons-log.connection-logger-name: stat,wall,log4j
     maxPoolPreparedStatementPerConnectionSize: 20
     useGlobalDataSourceStat: true
     connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500


# mybatsi 的属性配置
mybatis:
   config-location: classpath: # mybatis xml 配置文件路径
   type-aliases-package:   # 定义包的别名
   mapper-locations:
     - classpath: # mapper xml 的映射文件

```

####  3、注册 Druid 数据源与监控配置
```java 

@Configuration
public class DruidConfig {

   /**
    *  数据绑定也可以作用于方法, 会与 druid 属性绑定
    */
   @ConfigurationProperties(prefix = "spring.datasource")
   @Bean
   public DataSource druidDataSource(){
       return new DruidDataSource();
   }

   /**
    *  配置 Druid 的监控, 这是一个 Druid 后台管理 Servlet
    */
   @Bean
   public ServletRegistrationBean seatViewServlet(){
       ServletRegistrationBean bean = new ServletRegistrationBean(new StatViewServlet(), "/druid/*");
       Map<String, String> initParams = new HashMap<>();

       initParams.put("loginUsername", "admin");  // 用户名
       initParams.put("loginPassword", "gmC24354."); // 密码
       initParams.put("allow", ""); // 添加白名单, 空允许所有用户访问
       initParams.put("deny", "192.168.15.21"); // 添加黑名单

       bean.setInitParameters(initParams);
       return bean;
   }

   /**
    *  配置一个 web 监控的 filter
    */
   @Bean
   public FilterRegistrationBean webStatFilter(){
       FilterRegistrationBean bean = new FilterRegistrationBean();
       bean.setFilter(new WebStatFilter());

       Map<String, String> initParams = new HashMap<>();
       initParams.put("exclusions", "*.js,*.css,/druid/*" );  // 不拦截的请求

       bean.setInitParameters(initParams); // webStatFilter 参数
       bean.setUrlPatterns(Arrays.asList("/*"));

       return bean;
   }

}

```