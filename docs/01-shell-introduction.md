# 01 - Shell (Introduction)

## What is Shell?

> What is a Command Line? 
> 
> What is a terminal? 
> 
> What is a shell? 
> 
> *New keywork yuer jang lei*

โปรแกรมในปัจจุบันที่เราใช้กันแบบมีปุ่มให้กด หรือเรียกว่า GUI (Graphical User Interface) แต่โปรแกรมที่เกิดขึ้นมาก่อนการมี GUI นั่นก็คือโปรแกรมแบบ CLI (Command Line Interface) ซึ่งเป็นโปรแกรมที่เราจะคุยผ่าน Terminal หรือ Shell (หน้าต่างดำ ๆ)

![Pasted image 20241216173058.png](../public/screenshots/Pasted%20image%2020241216173058.png)


ในสายงาน Developer เรามักนิยมใช้คำสั่งแบบพิมพ์เข้าไปใน Terminal หรือ Command Line มากกว่าการใช้ GUI เพราะเครื่องมือส่วนมากจะ Advanced กว่า และก็ทำมาให้พวกเรา Developer ใช้กันเอง จึงไม่จำเป็นต้องมีหน้าตา GUI ที่สวยงามแต่อย่างใด

ในบทแรก จุดประสงค์คือให้เราหัดใช้คำสั่งพื้นฐานง่าย ๆ ก่อนจะเริ่มใช้คำสั่งที่ซับซ้อนต่อไป

## How to use Shell?

### Mac OS หรือ Linux

![Pasted image 20241216173854.png](../public/screenshots/Pasted%20image%2020241216173854.png)

ใน Mac OS หรือ Linux สามารถใช้ Terminal ได้โดยการกด `Cmd + Space` แล้วพิมพ์ `Terminal` แล้วกด Enter

**เหตุผลที่เลือกยกตัวอย่าง Mac OS หรือ Linux ก่อน** เพราะว่า Terminal ของทั้งสองระบบปฏิบัติการนี้เป็น Bash Shell ซึ่งเป็น Shell เก่าแก่ที่ใช้กันมานาน และ **เป็น Shell ที่ทาง 42 เค้ายึดในการใช้ Run คำสั่งด้วย**
### Windows

สำหรับ Windows ใช้ Shell คนละตัวกับ Mac OS และ Linux แต่ก็ยังสามารถใช้ร่วมกันได้ Shell ของ Windows คือ 

- **Command Prompt** `cmd` เกิดก่อน
- **PowerShell** `powershell` เกิดทีหลัง ใหม่กว่า ใช้คำสั่งร่วมกับ Command Prompt ได้ และมีคำสั่งที่*พอจะ*คล้ายคลึงกับ Bash Shell มากยิ่งขึ้น

อย่างไรก็ตามสำหรับตอนนี้ยังไม่ต้องไปซีเรียสมากหรือต้องจำอะไร มันไม่ออกสอบหรอก แต่ปัญหาคือมันต่างตอนทำงานแน่ ๆ 😔 เดี๋ยวพอทำโจทย์ข้อลึก ๆ ละเริ่มติดปัญหาจะมาอธิบายละกัน
#### โปรแกรม Windows Terminal

![Pasted image 20241216174710.png](../public/screenshots/Pasted%20image%2020241216174710.png)

แนะนำมาก ๆ สำหรับมือใหม่ที่หัดใช้ เพราะหน้าตาสวยงาม ไม่น่าเกลียด 5555555

โปรแกรมนี้แถมมากับ **Windows 11** แล้ว สามารถรันได้โดย Search คำว่า Terminal หรือกดปุ่ม `Windows + R` แล้วพิมพ์ `wt` กด Enter

**สำหรับ Windows 10** แนะนำให้ติดตั้งจากลิงก์นี้ https://aka.ms/terminal 

### Android

ห๊า Android ก็มีด้วยหรอ อ๋อ ใช่จ้า เพราะ **โปรแกรม Command Line** เป็นพื้นฐานของโปรแกรมทุกตัวที่เราใช้บนโลก

สามารถติดตั้งได้โดย Download App ชื่อ [**Termux**](https://play.google.com/store/apps/details?id=com.termux&hl=th) มาจาก **Google Play Store** โดยแอปนี้จะจำลองการรัน Shell มาอยู่ในเครื่องโทรศัพท์เรา ใช้ได้แทบทุกคำสั่งเลย (แต่อาจจะมีงง ๆ Setup บ้าง)

![Pasted image 20241216175106.png](../public/screenshots/Pasted%20image%2020241216175106.png)
### iOS

เสียใจ iOS ขี้กั้ก หาคอมเอานะจ๊ะ
## Get started with Terminal

เรามาลองรันคำสั่งอะไรบางอย่างบน Terminal ดีกว่าค้าบเตง ด้วยการพิมพ์ Hello World (?)

คัดลอกคำสั่งต่อไปนี้

```sh
echo "Hello World"
```

*(Linux)*

![Pasted image 20241216180142.png](../public/screenshots/Pasted%20image%2020241216180142.png)

*(Windows)*

![Pasted image 20241216180124.png](../public/screenshots/Pasted%20image%2020241216180124.png)

เห้ย เก่งอะ แต่ Terminal ส่วนมากเน้นพิมพ์เป็นภาษาอังกฤษนะ ภาษาอื่นเช่นไทยไม่การันตีว่าจะขึ้นใน Terminal ได้ทุกเครื่องเด้อ (แต่เดี๋ยวนี้ก็พัฒนามาเยอะละแหละ)

> [!IMPORTANT]
> สำหรับตัวอย่าง อาจมีสลับการแสดงคำสั่งบน Terminal ของ **Linux (พื้นม่วง)** หรือ **Windows (พื้นดำ)** บ้าง ขอแจ้งว่า **ผลลัพธ์ที่เป็นมาตรฐานควรเป็นบน Linux (พื้นม่วง)** อย่างไรก็ตามคำสั่งส่วนมากมักคล้ายคลึงกัน (หรือก็ต่างไม่มาก)
> 
> เดี๋ยวจะมีวิธีที่ทำให้เรารัน Terminal แบบ Linux บน Windows ได้ แต่สำหรับโจทย์ข้อแรก ๆ ไม่จำเป็น จึงละไว้ก่อน ณ ที่นี้

เราสามารถใช้คำสั่ง `ls` (list directory) เพื่อ list files และ folders ทั้งหมดบน directory ได้

*Linux*

![Pasted image 20241216175835.png](../public/screenshots/Pasted%20image%2020241216175835.png)

*Windows (ยาวเฟื้อยเลยอะไรก็ไม่รู้ เห็นยังว่าบน windows มันประหลาด)*

![Pasted image 20241216175734.png](../public/screenshots/Pasted%20image%2020241216175734.png)

ในการอ่าน Terminal จะสังเกตว่ามันมี Path หรือตำแหน่งของ Folder ปัจจุบันด้วย

สำหรับ Terminal ของ Linux จะเป็นโครงสร้างแบบนี้

![Pasted image 20241216181334.png](../public/screenshots/Pasted%20image%2020241216181334.png)

ส่วนของ Windows จะเป็นโครงสร้างแบบนี้

![Pasted image 20241216181616.png](../public/screenshots/Pasted%20image%2020241216181616.png)

สำหรับ Path ที่เราอยู่เมื่อเริ่มต้นเปิด Terminal จะเรียกว่า **Home Directory** ซึ่งสำหรับ Linux จะแทนด้วยสัญลักษณ์ **ตัวหนอน `~`** แบบนี้ (หรือบางทีก็ bug ขึ้นเป็น `/home` เป็นความหมายเดียวกัน) ส่วนสำหรับ Windows จะยาวหน่อย แล้วแต่ Username จะเป็น **C:\Users\\`USERNAME`** แบบนี้

เราลองสร้าง Folder ซัก Folder ดู โดยใช้คำสั่ง **`mkdir`** (make directory) ตามด้วยชื่อโฟลเดอร์

```sh
mkdir test_dir
```

เสร็จแล้วเราลอง list directory ใหม่อีกครั้ง

```sh
ls
```

มองหาชื่อโฟลเดอร์ใหม่ จะต้องเจอชื่อที่เราตั้ง

![Pasted image 20241216182113.png](../public/screenshots/Pasted%20image%2020241216182113.png)

![Pasted image 20241216182313.png](../public/screenshots/Pasted%20image%2020241216182313.png)

*(ของ Windows) ขึ้นตั้งแต่ตอน mkdir เลย*

ทีนี้เราลองเปลี่ยนเข้าสู่ directory กันบ้าง คำสั่งที่ใช้คือคำสั่ง `cd` (change directory)

```sh
cd test_dir
```

แล้วเราลอง list directory

![Pasted image 20241216182401.png](../public/screenshots/Pasted%20image%2020241216182401.png)

จะไม่แสดงอะไรเลย เพราะเรายังไม่ได้สร้างไฟล์อะไรซักอย่าง

ทีนี้ เราลองสร้างไฟล์แบบง่าย ๆ โดยใช้คำสั่ง `echo`  เหมือนเดิม แต่หลังจากจบข้อความที่ต้องการ เราพิมพ์เครื่องหมาย > ตามด้วยชื่อไฟล์ใหม่ที่ต้องการไปด้วย เช่น test_file.txt

```sh
echo "Merry Christmas" > test_file.txt
```

> หลักการของคำสั่งนี้คือ แทนที่ข้อความจะแสดงออกทางหน้าจอ จะถูกส่งไปยังไฟล์ที่เรากำหนดไว้แทน

ทีนี้ลอง list directory

![Pasted image 20241216182757.png](../public/screenshots/Pasted%20image%2020241216182757.png)

จะได้ไฟล์ใหม่นี้มาและ

เราสามารถแสดงผลเนื้อหาภายใน file ได้ โดยใช้คำสั่ง `cat` ตามด้วยชื่อไฟล์

```sh
cat test_file.txt
```

![Pasted image 20241216183757.png](../public/screenshots/Pasted%20image%2020241216183757.png)

เย้ เก่งมาก

ถ้าเราอยากลบไฟล์ เราสามารถลบได้โดยใช้คำสั่ง `rm` (remove) ตามด้วยชื่อไฟล์

```sh
rm test_file.txt
```

![Pasted image 20241216184735.png](../public/screenshots/Pasted%20image%2020241216184735.png)

กลายเป็น directory เปล่า ๆ เรียบร้อย

เราสามารถสร้าง folder ย่อยใน folder ได้ด้วยนะ ใช้คำสั่ง `mkdir` และ `cd` เข้าไปลึก ๆ ได้เลย แต่ถ้าสมมติเราอยากพอละ กลับไปที่โฟลเดอร์ก่อนหน้า เราสามารถใช้คำสั่ง `cd ..` ได้

```sh
cd ..
```

โฟลเดอร์ `..` นี้ไม่มีอยู่จริง แต่เป็นโฟลเดอร์พิเศษที่ Shell จะเข้าใจว่าเราหมายถึงโฟลเดอร์ก่อนหน้า

พอเรารันเสร็จ path ที่ปรากฏบน terminal ก็จะเปลี่ยนไปละ

![Pasted image 20241216185045.png](../public/screenshots/Pasted%20image%2020241216185045.png)

ในการลบ Folder จะแตกต่างกันระหว่างบน Linux และ Windows สำหรับบน Linux ให้ใช้คำสั่ง `rm -rf` เพื่อลบ directory ถ้าใช้ rm เฉย ๆ ระบบจะไม่ให้ลบ

![Pasted image 20241216185327.png](../public/screenshots/Pasted%20image%2020241216185327.png)

*(แสดงตัวอย่างการรัน ใช้แค่ rm จะขึ้นเตือนและ folder ไม่ถูกลบ ต้องใช้ rm -rf folder จึงจะถูกลบ*

> [!CAUTION]
> `rm -rf` จะลบ **ทุกไฟล์และโฟลเดอร์โดยไม่มีการเตือน** โปรดเช็คให้ดีก่อนลบ

ส่วน Windows งอแง ไม่รู้จัก `-rf` ก็ใช้ `rm` ธรรมดานี่แหละ งง ๆ ดี

![Pasted image 20241216185559.png](../public/screenshots/Pasted%20image%2020241216185559.png)

> [!NOTE]
> สำหรับ Windows ถ้าใช้ `rm` ธรรมดาจะยังมีขึ้นเตือนบ้างแบบนี้

เก่งมาก เข้าใจวิธีการทำงานของ files และ folders บน terminal อย่างง่าย ๆ แล้ว!

## What's next?

Challenge สำหรับข้อต่อ ๆ ไปในระบบ


