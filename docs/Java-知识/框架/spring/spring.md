## 初识

#### <div class="biaoti2"></div> spring 的是为了简化 web 开发而孕育而生

> <span id='gonglian' style='font-size: 13px'>spring 是一种开源轻量级一站式框架，是为了解决企业应用开发复杂性而产生的。spring 之力与解决 javaEE 的各层解决方案，也就是所谓的一站式的。</span>
> <span  style='font-size: 13px'><br> spring 坚持的唯一原则: </span>
>> <span  style='font-size: 13px'> 在市场上已有较好的解决方案，就不会重复性造轮子，并与第三方解决方案提供了良好集成。在第三方组件提供简化开发模本，如: http、 redis、jdbc、activemq</span>

## 配置类开发

#### <div class="biaoti2"></div> 新的 spring 配置开发模式，java 类与 xml 配置等价的

> <span id='gonglian' style='font-size: 13px'>1、添加 spring 核心依赖 jar 包</span>
>> ![An image](/img/java/框架/spring/spring-04.png)

> <span id='gonglian' style='font-size: 13px'>2、java Configuration 配置类创建与介绍</span>
>> ![An image](/img/java/框架/spring/spring-05.png) 
>> <div style='margin-top: -10px' > ![An image](/img/java/框架/spring/spring-07.png) </div>

> <span id='gonglian' style='font-size: 13px'>3、读取配置文件, 获取托管给 spring 的 Bean </span>
>> ![An image](/img/java/框架/spring/spring-06.png)


#### <div class="biaoti2"></div> includeFilters 或者是 excludeFilters ，使用 FilterType 设置范围如下

<div style='font-size: 12px'>

| 类型       | 类型名称         | 范围 | 说明 
| ------------- |:------------- |:-------------:|:-------------:| 
| ANNOTATION     | 注解 | 较大 |作用范围在注解上, 如: 被 @Controller 贴上的每个类, 不是被排除不被 spring 托管、就是只被扫描提供给 spring 托管
| ASSIGNABLE_TYPE     | 类型 | 较小 |作用范围只在一个类上, 如: 值是 SpringService.class , 不是被排除不被 spring 托管、就是只被扫描提供给 spring 托管

</div>

## 条件注册 Bean 
#### <div class="biaoti2"></div> 也就是说，当一个 Bean 满足一个条件后，才会被 spring IOC 托管
> <span id='gonglian' style='font-size: 13px'>1、添加 spring 核心依赖 jar 包</span>
>> ![An image](/img/java/框架/spring/spring-04.png)

> <span id='gonglian' style='font-size: 13px'>2、在使用 @Configuration 配置文件时，通过 @Bean 注解来把 java 对象实列往 spring IOC 容器注册进去。@Bean 我是可以选择性的注册进去，也就是条件注册，需要实现 spring 提供的 Condition 接口，如下:</span>
>> ![An image](/img/java/框架/spring/spring-08.png)

> <span id='gonglian' style='font-size: 13px'>3、在配置文件中那个 @Bean 需要选择性的注册。需要使用 @Conditional 注解, 值就是实现 spring 提供的接口。 如下:</span>
>> ![An image](/img/java/框架/spring/spring-09.png)

> <span id='gonglian' style='font-size: 13px'>4、结果: 这个选择性注册 Bean, 表示在 liunx 系统下运行程序就会注册该 Bean, 否则该 Bean 就不会注册</span>
>> <span  style='font-size: 13px'>注意: 可以在设置中改变程序获取操作系统的，如 VM options : -Dos.name=liunx</span>

## Import 注册 Bean
#### <div class="biaoti2"></div>  Bean 是 spring 的核心，也提供各种各样注册 Bean 的方式，Import 也将是其中的一种
> <span id='gonglian' style='font-size: 13px'>1、添加 spring 核心依赖 jar 包</span>
>> ![An image](/img/java/框架/spring/spring-04.png)

> <span id='gonglian' style='font-size: 13px'>2、将 spring 提供俩种接口分别是 ImportSelector 与 ImportBeanDefinitionRegistrar 来自己添加 Bean 注入 IOC 容器中</span>
>> <span style='font-size: 13px'>2.1 ImportSelector 接口实现: </span>
>> ![An image](/img/java/框架/spring/spring-10.png)
>> <span style='font-size: 13px'>2.2 ImportBeanDefinitionRegistrar 接口实现: </span>
>> ![An image](/img/java/框架/spring/spring-11.png) 

> <span id='gonglian' style='font-size: 13px'>3、在配置文件中，使用 @Import 注解加载俩个实现接口，让接口添加的 Bean 注册到 IOC 容器中</span>
>> ![An image](/img/java/框架/spring/spring-12.png)

## 生命周期
#### <div class="biaoti2"></div>  Bean 的创建 --> 初始化 --> 销毁
> <span id='gonglian' style='font-size: 13px'>Bean 的初始化: </span>
>> <span  style='font-size: 13px'>在使用 @Bean 注解时，有一个 initMethod 属性可以指定当前 Bean 的一个方法名。当每到创建 Bean 的实列时，就会调用指定的方法来初始化。 </span>
>> ![An image](/img/java/框架/spring/spring-13.png) 

>> <span style='font-size: 13px'>Bean 注解也有个 destroyMethod 属性来指定当前 Bean 的一个方法名, 当 Bean 的实列销毁时就会调用该方法。在 spring 中单列 Bean 在容器销毁时也跟着销毁，多列的就会交给 GC 来处理，销毁的方法调用不稳定 </span>
>> ![An image](/img/java/框架/spring/spring-14.png) 

> <span id='gonglian' style='font-size: 13px'> 第二种实现 Bean 创建时调用初始化方法与销毁时调用的方法。 </span>
>> <span style='font-size: 13px'>@PostConstrut : 贴在类的一个方法上，当该类托管给 spring IOC 容器创建完成时，就会调用该方法初始化</span>
>> <span style='font-size: 13px'>@PreDestroy : 贴在类的一个方法上，当类销毁时会调用该方法做最后的清理工作  </span>


## DI 依赖注入
#### <div class="biaoti2"></div> 属性依赖注入, 介绍普通类型与对象类型概念和使用

> <span id='gonglian' style='font-size: 13px'>1、配置文件介绍: </span>
>> <span style='font-size: 13px'>在配置文件中使用了 @PropertySource 注解, 用于加载属性文件的。与使用了 @Primary 注解为该 Bean 提高依赖注入优先级</span>
>> ![An image](/img/java/框架/spring/spring-15.png) 

> <span id='gonglian' style='font-size: 13px'>2、属性注入注解介绍: </span>
>> ![An image](/img/java/框架/spring/spring-16.png) 

#### <div class="biaoti2"></div> @Autowired 注解，可以有多种方式进行依赖注入
> <span id='gonglian' style='font-size: 13px'>1、作用在构造方法上，当对象创建时，会注入对于的参数</span>
>> ![An image](/img/java/框架/spring/spring-17.png) 

> <span id='gonglian' style='font-size: 13px'>2、作用于 set 方法上，当对象创建时，会注入对于的参数</span>
>> ![An image](/img/java/框架/spring/spring-18.png) 

## Aware
#### <div class="biaoti2"></div> 获取 spring 内部数据
> <span id='gonglian' style='font-size: 13px'>在 spring 中, 有许多继承了 Aware 接口，这些接口可以为我们获取 sprin 内部数据, 上下文对象、系统环境变量对象、解析器对象等等操作。只要实现提供的接口并注册到 IOC 容器即可: </span>
>> <span style='font-size: 13px'>这些接口都是以 Aware 结尾的，当 spring 一切都初始化完毕后</span>
>> ![An image](/img/java/框架/spring/spring-19.png) 


 
## AOP
#### <div class="biaoti2"></div> Aop 面向切面编程，提供了业务之间的隔离性
> <span id='gonglian' style='font-size: 13px'>Aop 面向切面编程是 spring 的核心组件, 可以让方法只关注与业务, 让如 log 日志打印交给增强的方法实现。spring 的 Aop 是使用 Cglib 动态代理与 jdk 动态代理实现。</span>

#### <div class="biaoti2"></div> Aop 使用介绍
> <span id='gonglian' style='font-size: 13px'>1、添加 Aop 的核心 jar 包 </span>
>> ![An image](/img/java/框架/spring/spring-21.png) 

> <span id='gonglian' style='font-size: 13px'>2、配置文件设置</span>
>> <span  style='font-size: 13px'>在核心配置文件需要添加 @EnableAspectJAutoProxy 注解, 否则 AOP 的功能是无效的。</span>
>> ![An image](/img/java/框架/spring/spring-20.png) 

> <span id='gonglian' style='font-size: 13px'>3、核心增强类</span>
>> <span  style='font-size: 13px'>在添加增强类后，一个切面类配置就完成了，接下来只需要关注切面表达式，根据设置的表达式要对那些类的那些方法进行增强，字符可以用 * 号来替代，表达式所有。</span>
>> ![An image](/img/java/框架/spring/spring-22.png) 


## Transactional
#### <div class="biaoti2"></div> 事务的处理将是交给 spring ，可以更好的业务实现
> <span id='gonglian' style='font-size: 13px'>1、添加 Aop 的核心 jar 包 </span>
>> ![An image](/img/java/框架/spring/spring-23.png) 

> <span id='gonglian' style='font-size: 13px'>2、配置事务的生效</span>
>> <span  style='font-size: 13px'>使用了 @EnableTransactionManagement 注解，表示开启注解声明式事务，@Transaction 才会生效。一个注意点: 一下俩个 Bean 都调用 dataSource() 方法获取数据源，但是他们是同一个数据源的实列，而不是俩个实列 </span>
>> ![An image](/img/java/框架/spring/spring-24.png) 

> <span id='gonglian' style='font-size: 13px'>1、Dao 层使用声明式事务与 jdbc 模本来操作数据库 </span>
>> ![An image](/img/java/框架/spring/spring-25.png) 


## 注解整合 ssm
#### <div class="biaoti2"></div>  纯注解开发，整合 spring springmvc mybtais 框架
> <span id='gonglian' style='font-size: 13px'>1、添加 ssm 依赖的 jar </span>
>>``` xml
>>  <dependencies>
>>
>>      <dependency>
>>          <groupId>junit</groupId>
>>          <artifactId>junit</artifactId>
>>          <version>4.11</version>
>>          <scope>test</scope>
>>      </dependency>
>>
>>      <!-- servlet 依赖 -->
>>      <dependency>
>>          <groupId>javax.servlet</groupId>
>>          <artifactId>javax.servlet-api</artifactId>
>>          <version>3.1.0</version>
>>          <scope>provided</scope>
>>      </dependency>
>>
>>      <!-- mvc 包含 spring 的核心 jar -->
>>      <dependency>
>>          <groupId>org.springframework</groupId>
>>          <artifactId>spring-webmvc</artifactId>
>>          <version>5.0.7.RELEASE</version>
>>      </dependency>
>>
>>      <!-- mysql 驱动 -->
>>      <dependency>
>>          <groupId>mysql</groupId>
>>          <artifactId>mysql-connector-java</artifactId>
>>          <version>8.0.11</version>
>>      </dependency>
>>
>>      <!-- 数据源 -->
>>      <dependency>
>>          <groupId>com.alibaba</groupId>
>>          <artifactId>druid</artifactId>
>>          <version>1.1.16</version>
>>      </dependency>
>>
>>      <!-- mybatis 的依赖-->
>>      <dependency>
>>          <groupId>org.mybatis</groupId>
>>          <artifactId>mybatis</artifactId>
>>          <version>3.5.1</version>
>>      </dependency>
>>
>>      <!-- mybatis 与 spring 整合的 jar-->
>>      <dependency>
>>          <groupId>org.mybatis</groupId>
>>          <artifactId>mybatis-spring</artifactId>
>>          <version>2.0.1</version>
>>      </dependency>
>>
>>      <!-- spring aop 依赖的 jar 包-->
>>      <dependency>
>>          <groupId>org.springframework</groupId>
>>          <artifactId>spring-aspects</artifactId>
>>          <version>5.0.7.RELEASE</version>
>>      </dependency>
>>      <!-- Lombok -->
>>      <dependency>
>>          <groupId>org.projectlombok</groupId>
>>          <artifactId>lombok</artifactId>
>>          <version>1.18.6</version>
>>      </dependency>
>>
>>      <!-- jdbc、事务依赖  -->
>>      <dependency>
>>          <groupId>org.springframework</groupId>
>>          <artifactId>spring-jdbc</artifactId>
>>          <version>5.0.7.RELEASE</version>
>>      </dependency>
>>
>>
>>  </dependencies>
>>```

> <span id='gonglian' style='font-size: 13px'>2、创建 tomcat 启动加载核心的 类</span>
>> 实现了 AbstractAnnotationConfig DispatcherServletInitializer 接口后，tomcat 启动就会加载该类的 getRootConfigClasses 与 getServletConfigClasses 俩个方法。这俩个方法返回的配置文件类就是初始化到容器的 Bean ,与那些相关的配置。接来实现这些核心类。
>>``` java
>>/**
>> * @program:   tomcat 启动后创建的对象，调用方法来初始化容器以前的控制器
>> * @Date: 2019/9/13 0013 14:30
>> * @Author: guoMingCheng
>> * @Description:
>> */
>>public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
>>
>>    @Override  // 根容器, 负责 service dao 的 Bean 的创建, 以及事务的这块
>>    protected Class<?>[] getRootConfigClasses() {
>>        return new Class[]{RootConfig.class};
>>    }
>>
>>    @Override  // 子容器, 负责 controller 的 Bean 的创建, 以及映射和视图配置等等..
>>    protected Class<?>[] getServletConfigClasses() {
>>        return new Class[]{WebMvcConfig.class};
>>    }
>>
>>    @Override  // 配置 dispatcherservlet 拦截路径,  / 斜杆表示拦截所有但不饱和 jsp
>>    protected String[] getServletMappings() {
>>        return new String[]{"/"};
>>    }
>>
>>    @Override  // 配置过滤器或者配置监听 tomcat 启动
>>    public void onStartup(ServletContext servletContext) throws ServletException {
>>
>>        // 配置字符集过滤器
>>        servletContext.addFilter("characterEncoding" , CharacterEncodingFilter.class).addMappingForUrlPatterns(null , false , "/*");
>>
>>        // 监听 tomcat 启动与销毁, 用于关闭数据源的连接池. 不然关闭连 tomcat 会提示错误信息
>>        servletContext.addListener(new MyServletContextListener());
>>        super.onStartup(servletContext);
>>    }
>>
>>
>>}
>>```

> <span id='gonglian' style='font-size: 13px'>3、实现核心类以及配置类</span>
>> 3.1: 实现 RootConfig 根容器配置类：
>>``` java
>>/**
>> * @program: 根容器配置文件
>> * @Date: 2019/9/13 0013 14:40
>> * @Author: guoMingCheng
>> * @Description:
>> */
>>@EnableTransactionManagement  //开启事务
>>@ComponentScan(value = "com.guomingcheng" , excludeFilters = {
>>        @ComponentScan.Filter(type = FilterType.ANNOTATION , classes = {Controller.class})
>>}, useDefaultFilters = true)
>>public class RootConfig {
>>
>>   /**
>>    * 注册数据源
>>    */
>>   @Bean  
>>   public DataSource dataSource(){
>>
>>       DruidDataSource druidDataSource = new DruidDataSource();
>>       druidDataSource.setUsername("root");
>>       druidDataSource.setPassword("gmC24354.");
>>       druidDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
>>       druidDataSource.setUrl("jdbc:mysql://127.0.0.1:3306/ruiyue?characterEncoding=utf-8" +
>>               "&serverTimezone=GMT%2B8&useSSL=false");
>>       return druidDataSource;
>>   }
>>
>>
>>   /**
>>    *  注册事务
>>    */
>>   @Bean("dataSourceTransactionManager")
>>   public DataSourceTransactionManager getDataSourceTransactionManager(DataSource dataSource){
>>       return new DataSourceTransactionManager(dataSource);
>>   }
>>
>>   /**
>>    * SqlSession 工厂
>>    * @param dataSource 数据源，会在 IOC 中获取
>>    */
>>   @Bean("sqlSessionFactoryBean")
>>   public SqlSessionFactoryBean getSqlSessionFactoryBean(DataSource dataSource) throws IOException {
>>       SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
>>       factoryBean.setDataSource(dataSource);
>>       // 设置 MyBatis 配置文件路径
>>       // factoryBean.setConfigLocation(new ClassPathResource("mybatis-config.xml"));
>>       // 设置 SQL 映射文件路径
>>       factoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/*.xml"));
>>       // 设置 JavaBean 类型别名，在 SQL 映射文件中就不用写全类名
>>       factoryBean.setTypeAliasesPackage("com.guomingcheng.pojo");
>>       return factoryBean;
>>   }
>>
>>   /**
>>    * 注册扫描 Mapper 的类
>>    */
>>   @Bean("mapperScannerConfigurer")
>>   public MapperScannerConfigurer getMapperScannerConfigurer(){
>>       MapperScannerConfigurer mappper = new MapperScannerConfigurer();
>>       mappper.setBasePackage("com.guomingcheng.dao");  // 扫描 mapper 接口
>>
>>       return mappper;
>>   }
>>   
>>}
>>
>>```
>><br>
>>
>> 3.2: 实现 WebMvcConfig 子容器配置类： 
>>``` java
>>/**
>> * @program:
>> * @Date: 2019/9/13 0013 14:45
>> * @Author: guoMingCheng
>> * @Description:
>> */
>>@ComponentScan(value = "com.guomingcheng" , includeFilters = {
>>        @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Controller.class)
>>}, useDefaultFilters = false)
>>@EnableWebMvc  //使用该注解, 可使用 WebMvcConfigurer 接口可以扩展配置
>>public class WebMvcConfig implements WebMvcConfigurer {
>>
>>   /**
>>    * mvc 处理不了的请求交给 Servlet 来处理, .html .img .css 静态文件
>>    * 相当于：<mvc:default-servlet-handler/> 开启静态资源的访问的开关
>>    */
>>   @Override
>>   public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
>>       configurer.enable();  //启用默认Servlet支持
>>   }
>>
>>   /**
>>    *  配置视图解析器
>>    */
>>   @Bean
>>   public InternalResourceViewResolver viewResolver(){
>>       InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
>>       viewResolver.setPrefix("/WEB-INF/view/");
>>       viewResolver.setSuffix(".html");
>>       return viewResolver;
>>   }
>>   
>>}
>>
>>```
>><br>
>>
>>3.3: 实现监听 tomcat 关闭时的监听器
>>``` java
>>/**
>> * @program:
>> * @Date: 2019/9/13 0013 14:46
>> * @Author: guoMingCheng
>> * @Description:
>> */
>>public class MyServletContextListener implements ServletContextListener {
>>  @Override
>>  public void contextInitialized(ServletContextEvent servletContextEvent) {
>>
>>  }
>>
>>  @Override
>>  public void contextDestroyed(ServletContextEvent servletContextEvent) {
>>
>>      //这里如果Web应用拥有多个数据库的连接，可以一并关闭
>>      Enumeration<Driver> drivers = DriverManager.getDrivers();
>>      Driver driver = null;
>>      while (drivers.hasMoreElements()) {
>>          try {
>>              driver = drivers.nextElement();
>>              DriverManager.deregisterDriver(driver);
>>          } catch (SQLException ex) {
>>          }
>>      }
>>      AbandonedConnectionCleanupThread.checkedShutdown();
>>      
>>  }
>>}
>>
>>```

> <span id='gonglian' style='font-size: 13px'>4、最终目录图结构 </span>
>> 安装上面的步骤搭建 ssm 框架，就可以编写业务了。下面这张图是 ssm 框架下的目录结构
>> ![An image](/img/java/框架/spring/spring-26.png) 

## ssm 集成 mp-plus
#### <div class="biaoti2"></div> 集成 Mybatis-Plus 让 ROM 开发更加简单
> <span id='gonglian' style='font-size: 13px'>1、在 ssm jar包基础上添加 MP 的 jar </span>
>>``` xml
>>      <dependency>
>>            <groupId>com.baomidou</groupId>
>>            <artifactId>mybatis-plus</artifactId>
>>            <version>3.1.0</version>
>>      </dependency>   
>>```

> <span id='gonglian' style='font-size: 13px'>2、使用 MP 的 sqlSession 工厂 </span>
>> 原始: 这是 mybatis 配置的 sqlSession 工厂
>>``` java
>> /**
>>   * SqlSession 工厂
>> * @param dataSource 数据源，会在 IOC 中获取
>> */
>>@Bean("sqlSessionFactoryBean")
>>public SqlSessionFactoryBean getSqlSessionFactoryBean(DataSource dataSource) throws IOException {
>>    SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
>>    factoryBean.setDataSource(dataSource);
>>    // 设置 MyBatis 配置文件路径
>>    // factoryBean.setConfigLocation(new ClassPathResource("mybatis-config.xml"));
>>    // 设置 SQL 映射文件路径
>>    factoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/*.xml"));
>>    // 设置 JavaBean 类型别名，在 SQL 映射文件中就不用写全类名
>>    factoryBean.setTypeAliasesPackage("com.guomingcheng.pojo");
>>    return factoryBean;
>>}
>>```
>> 新的: 需要替换成 MP 的 sqlSession 工厂 <br>
>> 区别: 原始的: <span id='gonglian'>SqlSessionFactoryBean </span> 新的:  <span id='gonglian'>MybatisSqlSessionFactoryBean</span>
>>```js
>>    /**
>>    * SqlSession 工厂
>>    * @param dataSource 数据源，会在 IOC 中获取
>>    */
>>   @Bean("sqlSessionFactoryBean")
>>   public MybatisSqlSessionFactoryBean getSqlSessionFactoryBean(DataSource dataSource) throws IOException {
>>       MybatisSqlSessionFactoryBean factoryBean = new MybatisSqlSessionFactoryBean();
>>       factoryBean.setDataSource(dataSource);
>>       // 设置 MyBatis 配置文件路径
>>        //   factoryBean.setConfigLocation(new ClassPathResource("mybatis-config.xml"));
>>       // 设置 SQL 映射文件路径
>>       factoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/*.xml"));
>>       // 设置 JavaBean 类型别名，在 SQL 映射文件中就不用写全类名
>>       factoryBean.setTypeAliasesPackage("com.guomingcheng.pojo");
>>       return factoryBean;
>>   }
>>```

## ssm 整合 logback 日志
> <span id='gonglian'> 这不仅整合日志的框架，也是要统一日志框架。因为某些框架使用的不是 logback，我们需要把那些框架依赖的日志框架排除。通过 logback 官方提供适配器模式的日志框架替代那些框架底层使用别的日志框架。</span>
>> <span id='gonglian'>1、排除框架依赖别的日志框架 </span>
>> <br> 因 spring 的底层使用的是 commons-logging 日志框架，我们需要排除他
>>``` xml
>>     <!-- mvc 包含 spring 的核心 jar -->
>>    <dependency>
>>        <groupId>org.springframework</groupId>
>>        < artifactId>spring-webmvc</artifactId>
>>        <version>5.0.7.RELEASE</version>
>>        <!-- 移除 spring 依赖的日志 jar 包-->
>>        <exclusions>
>>            <exclusion>
>>                <groupId>org.springframework</groupId>
>>                <artifactId>spring-jcl</artifactId>
>>            </exclusion>
>>        </exclusions>
>>    </dependency>
>>
>>```
>> <br><br>
>> <span id='gonglian'>2、添加 logback 依赖的 jar 包 </span>
>> <br> 注意: 因为以排除掉 spring 依赖日志 jar 包。这次需要添加 jcl-over-slf4j 这个 jar, 这就是适配器 jar。每个日志框架，logback 都提供对应的适配器 jar 
>>``` xml
>> 
>>    <!-- 主实现类: 实现日志规范的 jar 包-->
>>    <dependency>
>>        <groupId>ch.qos.logback</groupId>
>>        <artifactId>logback-classic</artifactId>
>>        <version>1.2.3</version>
>>    </dependency>
>>
>>    <!-- 主实现类: 实现日志规范的 jar 包-->
>>    <dependency>
>>        <groupId>ch.qos.logback</groupId>
>>        <artifactId>logback-core</artifactId>
>>        <version>1.2.3</version>
>>    </dependency>
>>
>>    <!-- 定义日志规范 jar 包-->
>>    <dependency>
>>        <groupId>org.slf4j</groupId>
>>        <artifactId>slf4j-api</artifactId>
>>        <version>1.7.25</version>
>>    </dependency>
>>
>>    <!-- 更换 spring 底层的日志依赖为 logback , 替换原来的 commons.logging 日志-->
>>    <dependency>
>>        <groupId>org.slf4j</groupId>
>>        <artifactId>jcl-over-slf4j</artifactId>
>>        <version>1.7.25</version>
>>    </dependency>
>>
>>```
>><br><br>
>> <span id='gonglian'>3、添加 logback 核心配置文件 </span>
>> <br> 在 resources 下创建一个名为 logback.xml 的文件，添加一下内容。这些内容皆是配置的内容。
>>``` xml
>><?xml version="1.0" encoding="UTF-8"?>
>><configuration debug="true" scan="true" scanPeriod="1 seconds">
>>
>>  <contextName>logback</contextName>
>>  <!--定义参数,后面可以通过${app.name}使用-->
>>  <property name="app.name" value="logback_test"/>
>>  <property name="scheduler.manager.server.home" value="D:"/>
>>
>>  <!--ConsoleAppender 用于在屏幕上输出日志-->
>>  <appender name="stdout" class="ch.qos.logback.core.ConsoleAppender">
>>      <!--定义了一个过滤器,在LEVEL之下的日志输出不会被打印出来-->
>>      <!--这里定义了DEBUG，也就是控制台不会输出比 DEBUG 级别小的日志-->
>>      <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
>>          <level>DEBUG</level>   <!-- trace、debug、info、warn、error  -->
>>      </filter>
>>      <!-- encoder 默认配置为PatternLayoutEncoder -->
>>      <!--定义控制台输出格式-->
>>      <encoder>
>>          <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} [%file : %line] - %msg%n</pattern>
>>      </encoder>
>>  </appender>
>>
>>  <appender name="file" class="ch.qos.logback.core.rolling.RollingFileAppender">
>>      <!--定义日志输出的路径-->
>>      <!--这里的scheduler.manager.server.home 没有在上面的配置中设定，所以会使用java启动时配置的值-->
>>      <!--比如通过 java -Dscheduler.manager.server.home=/path/to XXXX 配置该属性-->
>>      <file>${scheduler.manager.server.home}/logs/${app.name}.log</file>
>>      <!--定义日志滚动的策略-->
>>      <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
>>          <!--定义文件滚动时的文件名的格式-->
>>          <fileNamePattern>${scheduler.manager.server.home}/logs/${app.name}.%d{yyyy-MM-dd.HH}.log.gz
>>          </fileNamePattern>
>>          <!--60天的时间周期，日志量最大20GB-->
>>          <maxHistory>60</maxHistory>
>>          <!-- 该属性在 1.1.6版本后 才开始支持-->
>>          <totalSizeCap>20GB</totalSizeCap>
>>      </rollingPolicy>
>>
>>      <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
>>          <!--每个日志文件最大100MB-->
>>          <maxFileSize>100MB</maxFileSize>
>>      </triggeringPolicy>
>>      <!--定义输出格式-->
>>      <encoder>
>>          <pattern>%d [%thread] %-5level %logger{36} [%file : %line] - %msg%n</pattern>
>>      </encoder>
>>  </appender>
>>
>>  <!--root是默认的logger 这里设定输出级别是debug-->
>>  <root level="trace">
>>      <!--定义了两个appender，日志会通过往这两个appender里面写-->
>>      <appender-ref ref="stdout"/>
>>      <appender-ref ref="file"/>
>>  </root>
>>
>>  <!--对于类路径以 com.example.logback 开头的Logger,输出级别设置为warn,并且只输出到控制台-->
>>  <!--这个logger没有指定appender，它会继承root节点中定义的那些appender-->
>>  <logger name="com.example.logback" level="warn"/>
>>
>>  <!--通过 LoggerFactory.getLogger("mytest") 可以获取到这个logger-->
>>  <!--由于这个logger自动继承了root的appender，root中已经有stdout的appender了，自己这边又引入了stdout的appender-->
>>  <!--如果没有设置 additivity="false" ,就会导致一条日志在控制台输出两次的情况-->
>>  <!--additivity表示要不要使用rootLogger配置的appender进行输出-->
>>  <logger name="mytest" level="info" additivity="false">
>>      <appender-ref ref="stdout"/>
>>  </logger>
>>
>>  <!--由于设置了 additivity="false" ，所以输出时不会使用rootLogger的appender-->
>>  <!--但是这个logger本身又没有配置appender，所以使用这个logger输出日志的话就不会输出到任何地方-->
>>  <logger name="mytest2" level="info" additivity="false"/>
>>
>></configuration>
>>
>>```
>> <br><br>
>> <span id='gonglian'>4、使用 logback 日志打印 </span>
>>``` java
>>//第一种的使用方法，之间通过 LoggerFactory 日志工厂获取日志对象
>>@Controller
>>public class TestContoller {
>>    private final Logger logger = LoggerFactory.getLogger(TestService.class);
>>
>>    @GetMapping("holle")
>>    public @ResponseBody String hello(){
>>        logger.find("holle wrod")
>>        return "holle wrod";
>>    }
>>}
>>
>>// 第二种使用的方法，添加 @Slf4j 注解，需要在 pom 文件添加 lombok jar 包。这样也可以获取日志对象，log 就是
>>@Slf4j 
>>@Controller
>>public class TestContoller {
>>
>>    @GetMapping("holle")
>>    public @ResponseBody String hello(){
>>        log.find("holle wrod")
>>        return "holle wrod";
>>    }
>>}
>>
>>```