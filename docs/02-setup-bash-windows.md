# 02 - (Windows Only) Setup Bash

หน้านี้เป็นหน้าพิเศษสำหรับสอนติดตั้งเครื่องมือที่ใช้ในการรันคำสั่งใน Bash Shell บน Windows ซึ่งแนะนำอย่างยิ่งสำหรับทำโจทย์ข้อหลัง ๆ ในบทที่ 1 สาเหตุแบบกระชับคือ Windows มันกากคับ จบ
## แบบ Perfect : WSL

WSL ย่อมาจาก Windows Subsystem for Linux เป็นระบบจาก Microsoft ที่ทำให้เราสามารถติดตั้ง Linux ยัดลงไปใน Windows ได้เลย ปัญหาคือกินพื้นที่ประมาณนึง (2 GB) ถ้าเน็ตจำกัดหรือมีปัญหาระหว่างการติดตั้ง มีตัวเลือกอื่นด้านล่าง

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

เปิด Windows Terminal ตามปกติ ให้พิมพ์ `ubuntu` จะเข้าสู่ WSL ด้วย Home Directory ภายใน Linux **(ไม่ Share กับไฟล์เดิมที่มีอยู่)**

![](../screenshots/Pasted%20image%2020241217012135.png)

ในการออกสามารถพิมพ์ exit เพื่อออกได้
 
ถ้าต้องการใช้โฟลเดอร์เดิมที่มีอยู่ ให้เปลี่ยนไปใช้คำสั่ง `ubuntu run` จะได้ผลลัพธ์เหมือนเดิม (path จะเปลี่ยนเล็กน้อย แต่มันคือ home directory แบบ Windows คับ)

![](../screenshots/Pasted%20image%2020241217012156.png)
## แบบประหยัด: Git Bash

> [!NOTE]
> 
> เลือกใช้ Git Bash เพราะเป็นตัวเลือกที่ Learning Curve น้อยสุด "คิดว่า" น่าจะพอทำโจทย์ใน 42 ได้คับ ทั้งนี้ถ้าเกิดปัญหาจริง ๆ แล้ว Search ไม่ออก อาจจำเป็นต้องกลับไปลง WSL นะ

### วิธีติดตั้ง

ทำตามขั้นตอนใน [Git for Windows Installation](../docs/00-getting-started-infra42.md) ได้เลย (อย่าลืมติ๊ก Windows Explorer Integration ถ้าลืมไปกดลงใหม่)

### วิธีใช้งาน

Search ชื่อโปรแกรมว่า **Git Bash** แล้วกด Open

![](../screenshots/Pasted%20image%2020241217012818.png)

Terminal จะปรากฏขึ้น เรียบร้อย

![](../screenshots/Pasted%20image%2020241217012648.png)




