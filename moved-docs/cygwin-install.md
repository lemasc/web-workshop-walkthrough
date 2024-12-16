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
4. เมื่อถึงหน้า **Download Site** ให้ Copy URL นี้ไปใส่ `https://download.nus.edu.sg/mirror/cygwin/` แล้วกด **Add** จากนั้นกด **Next**
	![](../screenshots/Pasted%20image%2020241216233330.png)
5. เมื่อถึงหน้า **Select Packages** จะเห็นรายการเยอะแยะเต็มไปหมด ให้ขยาย Package เป็น All > Base ติ๊กเครื่องหมายดังรูปเป็น Install **สังเกตว่า Column New  ที่เราเลือกจะเปลี่ยนจากคำว่า Default เป็น Install** เสร็จเรียบร้อยกด Next
	![](../screenshots/Pasted%20image%2020241216233958.png)
6. กด Next และรอติดตั้งจนเสร็จ
	
	![](../screenshots/Pasted%20image%2020241216234202.png)
	![](../screenshots/Pasted%20image%2020241216234206.png)
8. เมื่อเสร็จสิ้นให้กด **Finish**
	
	![](../screenshots/Pasted%20image%2020241216234339.png)

### วิธีใช้งาน

Double Click ที่โปรแกรม Cygwin64 Terminal บนหน้าจอ จะสามารถใช้ Terminal ได้ทันที **สังเกตว่าเป็นคนละตัวกับ Windows Terminal**

![](../screenshots/Pasted%20image%2020241216234406.png)

![](../screenshots/Pasted%20image%2020241216235114.png)
