# 02 - (Windows Only) Setup Bash

หน้านี้เป็นหน้าพิเศษสำหรับสอนติดตั้งเครื่องมือที่ใช้ในการรันคำสั่งใน Bash Shell บน Windows ซึ่งแนะนำอย่างยิ่งสำหรับทำโจทย์ข้อหลัง ๆ ในบทที่ 1 สาเหตุแบบกระชับคือ Windows มันกากคับ จบ

## สำคัญ!

ไม่ว่าจะใช้เครื่องมือใดก็ตาม **ไฟล์ต่าง ๆ ที่สร้างใน home directory** (หรือไฟล์ใด ๆ บนเครื่องก็ตาม) จะ **ไม่ Share ร่วมกัน** กับ Windows ดังนั้นไฟล์ต่าง ๆ ที่จำเป็นต้องสร้างใหม่ใน Terminal ของเครื่องมือนั้น ๆ คับ

## แบบ Perfect : WSL

**คำอธิบายอย่างรวดเร็ว:** WSL ย่อมาจาก Windows Subsystem for Linux เป็นระบบ Linux ที่สามารถติดตั้งลงไปใน Windows ได้เลย

**ข้อดี:** เสถียรมาก ค่อนข้างแนะนำ (Official จาก Microsoft) ตั้งค่าและใช้งานง่าย เผลอ ๆ ประโยชน์อาจมากกว่าแค่ทำโจทย์ใน 42 ด้วยนะ

**ข้อเสีย:** กินพื้นที่ประมาณนึง (2 GB) ถ้าเน็ตจำกัดอาจไม่คุ้ม ลองติดตั้ง Cygwin ด้านล่าง

### วิธีติดตั้ง

1. คลิกขวาที่ปุ่ม Start ของ Windows เลือก **Terminal (Admin)** หรือ **PowerShell (Administrator)** สำหรับ Windows 10
2. รันคำสั่ง `wsl --install` เพื่อติดตั้ง รอได้เลย
	![](../screenshots/Pasted%20image%2020241216235745.png)

> [!WARNING]
>
> ถ้าเกิดปัญหาตั้งแต่ขั้นตอนนี้ แสดงว่า Windows อาจไม่รองรับ ให้ลองใช้ตัวด้านล่างแทน

3. บางเครื่องอาจะมีข้อความแจ้งให้ Restart ดังรูป ให้เรา Restart ได้เลย
	![](../screenshots/Pasted%20image%2020241217000649.png)
4. จะมีขั้นตอนที่ขึ้นให้เรากรอกชื่อ username และ password ใหม่สำหรับ login เข้าใช้งาน สามารถตั้งได้เลยตามความเหมาะสม
	![](../screenshots/Pasted%20image%2020241217000528.png)
5. ถ้ามันขึ้นว่าเสร็จก็คือเสร็จละ เย้

### วิธีใช้งาน

เปิด Windows Terminal ตามปกติ ข้าง ๆ icon + จะมีปุ่มให้กดสลับไปยัง Ubuntu ดังรูป

![](../screenshots/Pasted%20image%2020241217000917.png)

Terminal จะเปลี่ยนเป็นสีแดงม่วง สามารถใช้งานได้เลย

![](../screenshots/Pasted%20image%2020241217000952.png)

## แบบประหยัด : Cygwin

**คำอธิบายอย่างรวดเร็ว:** เป็นชุดโปรแกรมเล็ก ๆ ที่จำลองระบบพื้นฐานของ Linux มาใน Windows ให้สามารถใช้รันคำสั่งพื้นฐานต่าง ๆ ได้ (คอม Lab คณะก็ใช้ตัวนี้)

**ข้อดี:** มินิมอล (?) กินเมมน้อย (160 MB) โหลดไว สบายกระเป๋า (ถ้าเน็ตหอกากใช้อันนี้ดีกว่ามาก)

**ข้อเสีย:** แอบเก่าไม่โมเดิร์น ขั้นตอนเยอะนิ้ด อาจมีข้อจำกัดบ้างแต่ใช้เล่นใน 42 ได้แน่นอน

### วิธีติดตั้ง

1. ไปที่ https://cygwin.com/install.html โหลดตัว **setup-x86_64.exe**
	![](../screenshots/Pasted%20image%2020241216232804.png)
2. กด Next ตาม Default ได้ทุกหน้า
	![](../screenshots/Pasted%20image%2020241216232850.png)
	![](../screenshots/Pasted%20image%2020241216232927.png)
	![](../screenshots/Pasted%20image%2020241216233003.png)
3. เมื่อถึงหน้า **Download Site** ให้ Copy URL นี้ไปใส่ `https://download.nus.edu.sg/mirror/cygwin/` แล้วกด **Add** จากนั้นกด **Next**
	![](../screenshots/Pasted%20image%2020241216233330.png)
4. เมื่อถึงหน้า **Select Packages** จะเห็นรายการเยอะแยะเต็มไปหมด ให้ขยาย Package เป็น All > Base ติ๊กเครื่องหมายดังรูปเป็น Install **สังเกตว่า Column New  ที่เราเลือกจะเปลี่ยนจากคำว่า Default เป็น Install** เสร็จเรียบร้อยกด Next
	![](../screenshots/Pasted%20image%2020241216233958.png)
5. กด Next และรอติดตั้งจนเสร็จ
	![](../screenshots/Pasted%20image%2020241216234202.png)
	![](../screenshots/Pasted%20image%2020241216234206.png)
6. เมื่อเสร็จสิ้นให้กด **Finish** 
	![](../screenshots/Pasted%20image%2020241216234339.png)

### วิธีใช้งาน

Double Click ที่โปรแกรม Cygwin64 Terminal บนหน้าจอ จะสามารถใช้ Terminal ได้ทันที **สังเกตว่าเป็นคนละตัวกับ Windows Terminal**

![](../screenshots/Pasted%20image%2020241216234406.png)

![](../screenshots/Pasted%20image%2020241216235114.png)