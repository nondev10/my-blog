---
title: 若干种偶性哥德巴赫猜想的构造
published: 2025-08-28
description: '🤓😁😄😭🐷🤡🤓😁😄😭🐷🤡🤓😁😄😭🐷🤡'
image: ''
tags: ['数学', '哥德巴赫猜想']
category: '记录'
draft: false 
lang: ''
---

## 1 前言

哥德巴赫猜想（此处特指“偶性哥德巴赫猜想”，以下简称“哥猜”）是数论领域的一个未解之谜，以其简练的表达以及极高的证明难度著称。课余时间我就哥猜进行了大量的研究，本文是对研究过程中较有意义的成果的综述。这些成果表明哥猜（以及其他许多猜想）、素数计数函数（以及其他许多函数）可以通过简单方法得到良好的形式化表达（即使此类表达几乎都是复杂且不实用的），并首次给出了哥猜的良好闭合的函数式构造。并且我还探索了哥猜连续初等构造，通过对误差因子的动态调整实现了对误差的有效控制，使哥猜的连续初等构造成为可能。后续研究中，我通过“素数标记对称堆叠”（标记整数序列中素数并对称堆叠）得到了另一种更加简易的构造并通过对弦函数周期性的利用进一步简化了最终的函数构造。此外，我还探索了一种通过对数列编码到分数的方式以构造哥猜。

## 2 构造方法

### 2.1 基于猜想定义的基础性构造

通常，哥猜被定义为“任意大偶数可表为两个素数之和”基于此易推得满足哥猜的条件：

<script async src="https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"></script>
<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
    outlineMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  }
};
</script>

<p>$$\begin{align}
& \because \left(\forall n \in 2\mathbb{N},n>2\right) \exists n=p+q : p,q \in \mathbb{P} \\
& \therefore \left(\forall n \in 2\mathbb{N},n>2\right) \exists n=p+(n-p) : p,(n-p) \in \mathbb{P} \\
& \because \mathbb{P}\in\mathbb{N} , \mathbb{P}_{\text{min}}=2 \\
& \therefore \left(n \in 2\mathbb{N},n>2,p\in\mathbb{N},p\geq 2\right) n \to p+(n-p) \,\exists p,(n-p)\in\mathbb{P} \\
\end{align}$$</p>

基于 **公式(4)** 我们有定义：

<p>$$\begin{align}
& \eta:\mathbb{R_{\geq 0}}\to\{0,1\} \,\text{ such that }\, \eta(x)=\begin{cases}1 &\text{ if } x = 0 \\ 0 &\text{ if } x \ne 0\end{cases} \\
& \varrho:\mathbb{R}\to\mathbb{R} \,\text{ such that }\, \varrho(x)=0 \iff x \in \mathbb{P} \\
& \gamma:\{n \mid n=2 \mathbb{N},n>2\}\to \mathbb{Z} \,\text{ such that }\, \gamma(n)=\sum_{p=2}^{n/2}\eta(\varrho(p)+\varrho(n-p)) \\
\end{align}$$</p>

其中 $\gamma(n)$ 即为对大偶数 $n$ 在 $\{x \mid x \in [2,n/2],x\in\Z\}$ 区间内分解出符合哥猜的素数对的个数。实际上，只需有不少于一个符合哥猜的素数对即表明对大偶数 $n$ 哥猜成立。又因为 $\gamma(n) \in \mathbb{Z}$，故当对任意大偶数 $n$ 有 $\gamma(n) > 0$ 成立时哥猜成立。这意味着哥猜命题等价于：

<p>$$(n\in 2\mathbb{N}, n>2) \,\gamma(n) > 0$$</p>

接下来我们进一步给出 $\eta(x)$ 与 $\varrho(x)$ 的具体定义。注意到自然指数函数 $e^{-kx}(k\in \mathbb{R}^{+})$ 在 $x=0$ 时总为 $1$ ，当 $k\to+\infty$ 且 $x\in \mathbb{R}_{\geq 0}$ 时有 $e^{-kx}=\begin{cases}1 &\text{ if } x = 0 \\ 0 &\text{ if } x \ne 0\end{cases}$ 正好符合 $\eta(x)$的定义，故 $\eta(x)$ 的具体定义为：

<p>$$\eta(x)=\lim_{k\to\infty}e^{-kx}$$</p>

接下来，我们需要对 $\varrho(x)$ 给出具体定义。因其与素数判定相关，我们首先想到埃拉托斯特尼筛法，其通过对整倍数的标记以暴露素数 ，我们参考其思路：在 $\{n\mid n \in [2,x],x\in \mathbb{Z}\}$（可优化为 $\{n\mid n \in [2,\lfloor\sqrt{x}\rfloor],x\in \mathbb{Z}\}$ 但本文侧重于以连续初等形式构造，故不适用） 范围内逐个测试，如果 $\exists n \nmid x$ 则进行标记。对于标记的具体方式，我们可以定义一个函数 $\omega: [1,k_{v}] \to \mathbb{Z} \,\text{ such that }\, \omega(x)=\begin{cases}1 &\text{ if } \in \mathbb{Z} \\ 0 &\text{ if } x \notin \mathbb{Z}\end{cases}$ 不难发现可以利用高斯函数的垂直堆叠实现：

<p>$$\omega\left(x\right)=\lim_{k\to\infty}\sum_{n=1}^{k_{v}}e^{-k\left(x-m\right)^2}$$</p>

其中 $k_{v}$ 应不小于其因变量 $x$，当其作为 $\gamma(n)$ 的一部分时我们可直接令其为 $\gamma(n)$ 的因变量 $n$. 此外，在后续的研究中我还发现亦可用弦函数的周期性具体定义该函数，且无对输入域的特别限制（输入域为实数集）：

<p>$$\omega(x)=\lim_{k\to\infty}\cos^{2k}(\pi x)$$</p>

当 $n \mid x$ 时 $\omega(x/n)=1$，当 $n \nmid x$ 时 $\omega(x/n)=0$. 正好符合 $\varrho(x)$ 的初步定义，故 $\varrho(x)$ 可具体定义为：

<p>$$\varrho(x)=\sum_{n=2}^{x-1}\omega(\frac{x}{n})$$</p>

后续研究还发现可以利用弦函数叠加直接实现对合数的标记从而筛取素数，以实现素数判定（简单推导可以知道，对 $\varrho(x)$ 来说这与直接对 $\omega$ 使用弦函数形式并无区别）：

<p>$$\begin{align}
& \psi(x,n)=\lim_{k\to\infty}\cos(\frac{\pi x}{n})^{2k} \\
& \varrho(x)=\sum_{n=2}^{x-1}\psi(x,n)
\end{align}$$</p>

此外，还可以参考其他筛法（如：欧式筛）来实现该函数，为形式简单这里使用上述方法，此处不再过多赘述。

自此，对哥猜的不等式等价表达阐述完毕。此外，通过对该不等式的整体的观察不难发现一种不直接依赖素数定义的对哥猜的形式化逻辑表述，在此直接列出作为拓展不再过多赘述：

<p>$$\begin{align}
&\forall x \in 2\mathbb{N} + 2, \exists n \in \mathbb{Z}, 2 \leq n \leq \frac{x}{2}: \\
&\quad \left(\forall m, p \in \mathbb{Z}; 2 \leq m \leq n-1\right) 1 \leq p \leq n\mid \frac{n}{m} \neq p \,\land \\
&\quad \left(\forall m, p \in \mathbb{Z}; 2 \leq m \leq x-n-1\right) 1 \leq p \leq x-n\mid \frac{x-n}{m} \neq p.
\end{align}$$</p>

该方法是基于对基本定义的判断形式化为函数表达并基于遍历等算法思维实现，可延拓到其他许多猜想以及函数，在此举出若干例证，不再过多赘述：

<p>$$\begin{align}
&\omega_{1}\left(x\right) = \lim_{k\to\infty}\sum_{m = 0}^{x}e^{-k\left(x-m\right)^{2}} \\
&f_{1}\left(x\right)=\omega_{1}\left(\frac{x}{2}\right)\cdot\left(\frac{x}{2}\right)+\omega_{1}\left(\frac{x-1}{2}\right)\cdot\left(3x+1\right) \\
&f_{2}\left(x\right)=\lim_{x\to\infty}\sum_{n=2}^{x}\eta\left(\varrho\left(n\right)+\varrho\left(n+2\right)\right) \\
\end{align}$$</p>
（当$f_1^{n}\left(x\right)=1$时，考拉兹猜想成立；当$f_{2}\to\infty$时，孪生素数猜想成立。）

<p>$$\lim_{k \to \infty} \sum_{p=0}^{k} \sum_{q=1}^{k} e^{-k\left(\frac{p}{q}-x\right)^2}=0 \iff x \in \mathbb{CrQ}$$</p>
（无理数判定式）

<p>$$\pi\left(x\right)=\sum_{n=2}^{x}\eta\left(\varrho\left(n\right)\right)$$</p>
（素数计数函数）

此外，我发现若将上文极限中的 $k$ 作为误差因子变量以替代极限部分，可以通过对 $k$ 的合理动态调整以使误差达到可控水平。以上文的构造为例：将 $k$ 作为可调的误差控制因子，其值越大误差越小。因表达式的嵌套求和等，当 $k$ 为常数时，原式的误差随 $k$ 的增大呈非线性增大。因此，亦可设 $k$ 为一随 $k$ 非线性增大的数，使得随误差的增大，误差控制因子也增大，误差减小的程度随之增大。只要该式符合或超越原式的非线性增长速度即可使误差最终达到可控水平。许多良好可重复的测试表明，$k=10x^{e}$ （$x$ 取整体自变量）似乎可使误差收敛到一个极小的值。此时，对误差进行估计，并以此调整构造表达式可使该构造成为连续初等构造。

### 2.2 基于“素数标记对称堆叠”的启发性构造

“素数标记对称堆叠”是一种直观的方法用于验证有限范围内的哥德巴赫猜想，引用 **公式(1)** 的定义，其在代数上等价于检验“$n\in\mathbb{P} \land (n-p)\in\mathbb{P}$”的真假。具体来说，设有数列 $P=\{p_{i} \mid p_{i} \in [1,n-1], p_{i}=0 \iff p_{i}\notin\mathbb{P}, p_{i}=1 \iff p_{i}\in\mathbb{P}\}, P_{\text{rev}}=\{p_{n-1-i} \mid p_{n-i} \in [1,n-1], p_{i}=0 \iff p_{i}\notin\mathbb{P}, p_{i}=1 \iff p_{i}\in\mathbb{P}\}$（$i$ 为索引）那么，如果哥猜成立则有 $p_{i}=1 \land p_{n-i}=1$ 或 $p_{i}=1 \land p_{\text{rev},i}=1$ 。通过列表可以直观的演示这一过程：

|  N  |  1  |  2  |  3  |  $\cdots$  |  $i$  |  $\cdots$  |  $n-1$  |  $n$  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $P$ |  $p_{1}$  |  $p_{2}$  |  $p_{3}$  |  $\cdots$  |  $p_{i}$  |  $\cdots$  |  $p_{n}$  |  x  |
| $P_{\text{rev}}$|  $p_{n}$  |  $p_{n-1}$  |  $p_{n-2}$  |   $\cdots$  |  $p_{i}$  |  $\cdots$  |  $p_{1}$  |  x  |
| $P\cdot P_{\text{rev}}$|  $p_{1}\cdot p_{n}$  |  $p_{2}\cdot p_{n-1}$  |  $p_{3}\cdot p_{n-2}$  |   $\cdots$  |  $p_{i}\cdot p_{i}$  |  $\cdots$  |  $p_{n}\cdot p_{1}$  |  x  |

|  N  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $P$ |  0  |  1  |  1  |  0  |  1  |  0  |  1  |  x  |
| $P_{\text{rev}}$|  1  |  0  |  1  |  0  |  1  |  1  |  0  |  x  |
|$P\cdot P_{\text{rev}}$|  0  |  0  |  1  |  0  |  1  |  0  |  0  |  x  |

（如表所示，当且仅当 $\exists P\cdot P_{\text{rev}}=1$ 时，对于大偶数 $n$ 哥猜成立）

根据此原理，我们可以得到：

<p>$$\begin{align}
& \varrho\left(x\right)=\sum_{k=2}^{n-1}\psi\left(x,k\right) \\
& \varrho_{rev}\left(x\right)=\sum_{k=2}^{n-1}\psi\left(\left(x-n\right),k\right) \\
& \prod_{k=2}^{n-1}\left(\varrho\left(k\right)\cdot \varrho_{rev}\left(k\right)-1\right)=0 \\
\end{align}$$</p>

当且仅当哥德巴赫猜想成立时，**公式(18)** 成立。（**2.1** 末段的原理对此亦适用）

## 3 后记

私の哥德巴赫猜想研究：远看是悲剧，近看是更大的悲剧。

学生之路何幽幽，余寻哥猜以解忧。

学生之路何漫漫，遇上哥猜愁更愁。

天哪，宝宝！你是一个……《后记》！(⓿_⓿)

🤓😁😄😭🐷🤡

哥猜实在是太美，

上游的风啊，

吾欲言者前人言。

🤓😁😄😭🐷🤡

天哪◑﹏◐宝宝！你是一个……《后记》！(⓿_⓿)

吾欲言者前人言，

余无可言之；

吾欲事者前人事，

余无可事之。

🤓😁😄😭🐷🤡
天哪◑﹏◐宝宝\\(￣︶￣*\\))你是一个……《后记》！(⓿_⓿)
