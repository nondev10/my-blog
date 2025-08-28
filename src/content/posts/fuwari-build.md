---
title: 我是怎么用Fuwari搭建这个博客的
published: 2025-08-28
description: '简单记录一下我搭建这个博客的过程，不知道算不算一种教程，嗨呀~(～o￣3￣)～'
image: ''
tags: ['博客', 'Fuwari']
category: '记录'
draft: false 
lang: ''
---

## 工欲善其事，必先利其器

首先，让我们准备一些东西：

1. Github（账号）：我们可以在这里储存我们的网站源码。（免费！）
2. Cloudflare（账号）：我们可以通过这个平台部署我们的网站并托管我们的域名。（免费！）
3. US.KG（域名）：你可以在这里拿到免费的域名！（有可能失效！）
4. VS Code（软件）：微软出品的贼酷贼好用的代码编辑器！我们用它来改博客框架。
5. Marktext（软件）：免费开源的 Markdown 编辑器！我们用它来写博客。
6. Git（软件）：一个贼牛的CLI版本控制器！我们用w它来管理我们的网站代码仓库。
7. Node.js（运行环境）：一个很常用的 Javascript 运行环境。

此外你需要有最基本的电脑操作技能以及一点点🤏的前端编程基础，因为我们需要用 Markdown 来写博客所以也需要会一点 Markdown 啦~（可以在 [Markdown 基本语法 | Markdown 教程](https://markdown.com.cn/basic-syntax/) 学习 Markdown 语法，最快只需要半小时！q(≧▽≦q)）

## 本地部署 Fuwari

首先我们在 fuwari 的仓库动手点点 **Fork**（最好也点一下 **Star** 这是对原作者的尊重！）👇

::github{repo="saicaca/fuwari"}

然后出来的一个界面你可以改一下 **Repository name** （仓库名称）和 **Description** （简介）

:::tip
Github 的仓库名称最好由小写字母和短横线（`-`）组成，这样以后管理仓库会方便一些。
（例如：`my-blog`）
:::

这一步是把 **Fuwari** 这个博客框架复制一份到你自己的 Github 账号上，这样你自己的账号上也有了一个 **Fuwari** 仓库。

然后，我们用本地系统指令终端（cmd、ps随意）在你想要存放项目的目录（最好有1G以上空间！）把 **你自己的** Fuwari 仓库克隆下来，你可以用 HTTPS 也可以用 SSH，但我看到前人推荐用 SSH （理由是不用 *翻墙* 也能推送）所以我就用 SSH 啦~ 这里两种方法的指令都给出来，然后你自己选一个吧~

```batch
:: HTTPS
git clone git@github.com:[你的仓库名称].git

:: SSH

```

:::tip
这里 `[你的仓库名称]` 指的是 `[你的 Github 用户名]/[你指定的仓库名称]`，用于区分你的仓库是你的。
例如：`nondev10/my-blog` 就是 `nondev10` 的名称指定为 `my-blog` 的仓库的名称。
:::

然后全局安装 pnpm 这个 Node.js 的包管理器用于安装 Fuwari 所用到的依赖，只需在任意地方执行： `npm install -g pnpm`（如果慢的话可以用 **cnpm** [npmmirror 镜像站](https://npmmirror.com/)）

最后，我们在你刚刚克隆下来的 Fuwari 项目根目录下执行：

```batch
pnpm install
pnpm add sharp
```

至此，**Fuwari** 框架 的本地部署就全部完成啦！ヾ(≧▽≦*)o

你可以在根目录运行 `pnpm dev` 在本地预览你的博客框架（之后这会成为你的博客），建议保持预览以便以后调试页面！

## 从模板框架到自己的个人博客

接下来我们就可以将这个博客模板变成自己的博客啦！

首先，用 VS Code 打开整个项目文件，在根目录就可以找到 `astro.config.mjs` 然后打开。从上往下很快就能找到 `site` 和 `base` 的字段。

- `site`：博客站的网址，改成你准备好的域名网址。（如：`https://blog.shihao.us.kg/`）
- `base`：你的博客的根站（？），如果你是同这篇文章在 Cloudflare 部署默认（`/`）就行。

然后，找到相对路径 `src\config.ts` 的文件，在里面改一些个性化设置。里面已经讲得挺清楚了，这里解释几个重要的字段（从上往下）：

- `title`：主标题。
- `subtitle`：副标题，和主标题一起在主页标签页标题显示为 `主标题 - 副标题`。
- `lang`：网站主题语言，从注释中选择一个。
- `themeColor`：主题色，可在预览界面右上角的画板选择一种你喜欢的颜色然后把那个数作为 `hue` 值填进去。填完以后你就可以把 `fixed` 改成 `true` 这样别人就没法在他们那改你网站的主题色了。
- `banner`：就是背景图，你可以自己画一张或者找一张（注意许可！）然后放进项目文件夹（最好和 `favicon`、`avatar` 一起放进 `src\assets\images`），然后在 `src` 字段填写相对路径。
- `favicon`：网站标签页的图标，同 `banner`。
- `links`：顶部导航栏上的链接。
- `avatar`：你的头像，同 `banner`。
- `name`：你的昵称。
- `bio`：你的简介。
- `links`：你的 各平台账号/联系方式。`name` 为这个平台的名称（可选？），`icon` 为这个平台的图标（在 [Icônes](https://icones.js.org/) 选择，默认仅支持 fa6 图标集，如需其他图标集可用 `pnpm add @iconify-json/[你想安装的图标集名称]` 安装。）`url` 即该图标指向的链接。

在 `src/content/posts` 也就是你将来写博客的地方，有一些示例文章，你可以先在预览页面中看看。尤其 `markdown-extended.md`，它展示了原生 Markdown 没有的一些功能（Fuwari 框架特供！）。然后你可以选择直接删掉或者放到别的地方，比如我就在这个目录父级创建了一个 `posts(example)` 文件夹移动进去以便日后查看这些功能。（当然你也可以直接删掉(～￣▽￣)～）

## 让我们开始写博客

在根目录执行 `pnpm new-post [文章文件名]`，然后你的 `src/content/posts` 文件夹下就会出现一个名为 `[文章文件名].md` 的文件，当然你也可以自己创建不过要注意下面的 **字段** 问题👇👇👇。（比如：运行`pnpm new-post fuwari-build` 就会出现名为 `fuwari-build.md` 的文件）

:::tip
与 Github 仓库命名类似，建议使用小写字母与短横线的组合。为避免重复可以使用所讲述主要事物的字母命名（英文、拼音等，建议英文）加讲述的方向关键词的字母命名（同前），总的来说也就是文章的主题关键词。比如：“我是怎么用Fuwari搭建这个博客的” 提取所讲述事物 “Fuwari” 与 “搭建”，统一使用小写字母命名即 “fuwari” 和 “build”，合起来就是 `fuwari-build`。
:::

然后，用你的 Marktext 打开这个生成的文件，开始用 Markdown 编辑你的第一篇博客！

欸~ 有几个默认生成的字段，什么意思呢？

- `title`：即标题。
- `published`：即发布时间。
- `description`：即简介。
- `iamge`：即封面（可选）。
- `tags`：即标签。
- `category`：即分类。
- `draft`：是否是草稿（？），默认（`false`）就好。
- `lang`：语言，用于指定同一文章的多种语言（？），默认（留空）就好。

好了，可以愉快地写文章了！w

:::tip
你可以通过 Marktext - 左上角三条杠 - File - Preferences 或者 `Ctrl + ,`。选择左边选项卡 **Image** 打开 **Prefer relative assets folder**，然后把 **Relative image folder name** 改成 `assets/images`，这样你以后要用到什么图片往编辑器里一拖，它就会自动在 `assets/images` 文件夹下创建一个副本，然后自动在你刚刚拉进去的位置创建一个图片，这样你就不用再打开项目文件把图片放进去再手动创建图片啦~ （**Global image folder** 要改吗？反正我没改~）
:::

写完保存以后，你就可以在预览界面看到你的博客啦！(☆▽☆)

## 让每个人都能看到你的博客

如果你是通过 HTTPS 克隆的可以通过 `git set-url origin git@github.com:[你的仓库名称]` 改成 SSH（运行一次即可，不是 SSH 我不知道接下来怎么做qwq）

然后，正常的提交推送就好啦~（依次运行下面的代码）

```batch
git add .
git commit -m "[对提交的描述]"
git push
```

:::tip
`[对提交的描述]` 建议使用 `[Update\Upload] [文章文件名]`，例如：`Update fuwari-build`
:::

这样你的文章就推送到远程仓库啦~

然后我们要在 Cloudflare - Workers - Workers 和 Pages - 创建，创建一个 Page 或者 Worker，我是用 Page 但听说 Worker 更先进。（？）之后关联你之前 Fork 来的 Github 仓库。设置 **构建指令** 为 `pnpm build`，**构建输出目录** 为 `dist`。绑定自定义域名，这样访问你绑定的域名就可以访问你的博客啦！

你只需要重复之前的写文章和提交操作，你的文章就会被自动部署到 Cloudflare！

:::tip
这里我遇到一个问题是，自动部署总是出错，貌似是 `src\styles\markdown.css` 的问题。一种快捷的临时解决方法是在开头添加 `@import './main.css';`，不知道日后会不会修复。
:::

## 后话 & 致谢

此外，还有一些分享组件、浏览量显示什么的，这里懒得写啦ε=ε=ε=(~￣▽￣)~感兴趣的话可以看我 Github 仓库👇

::github{repo="nondev10/my-blog"}

我把我所有（大概）的更改都写在 `EDITED.txt` 文件里了，并且在更改的地方我也几乎都用了 **\*** 标明。

本文参考自 [Fuwari静态博客搭建教程 - AcoFork Blog](https://www.2x.nz/posts/fuwari)

特别感谢 **二叉树树** 提供的方法！
