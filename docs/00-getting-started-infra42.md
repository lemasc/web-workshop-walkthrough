# 00 - Getting Started with Infra42

## Reset Password for Login to Infra42

1. ไปที่ [https://signin.intra.42.fr/users/password/new](https://signin.intra.42.fr/users/password/new) ป้อน Infra ID ที่ได้รับ และกดปุ่ม **Send me reset password instructions**
	![Pasted image 20241216172449.png](../public/screenshots/Pasted%20image%2020241216172449.png)
2. จะได้รับอีเมลจาก 42 ให้กดลิงค์เพื่อตั้งรหัสผ่านใหม่ ให้กดที่ **Change my password**
	![Pasted image 20241216172558.png](../public/screenshots/Pasted%20image%2020241216172558.png)
3. ตั้งรหัสผ่านใหม่ให้เรียบร้อย
4. เมื่อเข้าสู่ระบบในครั้งแรกให้กดยอมรับเงื่อนไขทั้ง 4 หน้า เป็นการเสร็จสิ้น

(รายละเอียดอื่น ๆ สามารถดูได้ในเว็บไซต์)


## Setup GitHub

ในการส่งงานเราจะใช้ GitHub ซึ่งพูดง่าย ๆ ว่าเป็นพื้นที่สำหรับเก็บโค้ด ดูประวัติการทำงาน และทำงานร่วมกับคนอื่นได้

ลิงก์หลักของเรา (เหมือนตู้เก็บของ) คือ Repository ซึ่งจะได้รับจากการกด Link ใน **GitHub Classroom** จะมีลักษณะเป็นดังนี้ (ถ้าลืมให้กดที่ลิงก์ใน Discord ใหม่นะ สำคัญมาก)

```
https://github.com/DiscoveryPiscine42Bkk/coding-for-all-web-dec-2024-your-github-username
```

ในการทำงาน แบบง่าย (และลวกเกิน) คือการ Upload บน Website เลย แต่ในทางปฏิบัติแล้วตัว Git ไม่ได้ออกแบบมาให้ทำผ่าน Website แต่ทำผ่านบนคอมเราต่างหาก

### Use From VS Code (Windows)

Git ใช้บน VS Code ธรรมดาก็ได้ ทำไมจะต้องยุ่งยาก วิธีการมีดังนี้

#### Download Git for Windows

1. ไปที่ https://git-scm.com/downloads/win เลือก Download เป็น **64 bit**
	
	![](../public/screenshots/Pasted%20image%2020241217004342.png)
2. สามารถกด Next ตาม Default ได้เลย จนถึงหน้า **Select Components** ให้ติ๊กเลือก **Windows Explorer integration** ด้วย แล้วกด Next 	
	![](../public/screenshots/Pasted%20image%2020241217010849.png)
3. สามารถกด Next ต่อได้เรื่อย ๆ จนถึงหน้า **Adjust name** ให้เลือก **Override** และกด **Next**
	
	![](../public/screenshots/Pasted%20image%2020241217004707.png)

4. กด Next ต่อได้เรื่อย ๆ จนถึงหน้า **Line ending conventions** ให้แน่ใจว่าได้เลือก **Checkout Windows style** เพื่อป้องกันปัญหา เสร็จแล้วกด Next 
	
	![](../public/screenshots/Pasted%20image%2020241217004827.png)
5. กด Next ได้เรื่อย ๆ จนถึงปุ่ม Install เลย เมื่อเสร็จสิ้นให้กด **Finish**
	
	![](../public/screenshots/Pasted%20image%2020241217004931.png)

#### Enable in VS Code

**หากมีหน้าต่าง VS Code เปิดอยู่ ให้ปิดทั้งหมด แล้วเปิดหน้าต่างเปล่า ๆ ใหม่** ถ้าหน้าต่างใหม่ยังมี Folder เปิดค้างไว้อยู่ ให้เลือก File > Close Folder

ที่แท็บ Source Control (แท็บที่ 3) เลือกปุ่ม **Clone Repository** สำหรับครั้งแรกให้เข้าสู่ระบบด้วย GitHub ก่อนโดยกดที่ **Clone from GitHub**

![](../public/screenshots/Pasted%20image%2020241217005520.png)

VS Code จะขึ้นหน้าต่างสำหรับ Login ให้กด Allow และ Login ด้วย GitHub ตามปกติได้เลย
![](../public/screenshots/Pasted%20image%2020241217005536.png)

เมื่อ Login เรียบร้อยแล้ว ให้คัดลอก GitHub URL Repository โดยไปที่ปุ่ม **Code** สีเขียว ๆ เลือกแท็บ HTTPS และกด Copy มาแปะในช่องของ VS Code

![](../public/screenshots/Pasted%20image%2020241217005822.png)

![](../public/screenshots/Pasted%20image%2020241217005707.png)

จะขึ้นให้เลือก Folder ปลายทางที่จะ Download ลงไป สามารถเลือก Folder ใดก็ได้ตามเหมาะสม เนื่องจากค่าเริ่มต้นจะเป็น **home directory** อยู่แล้ว ดังนั้นเราไม่เปลี่ยนอะไรเลยก็ไม่เสียหาย

เมื่อเสร็จแล้วกด Open ได้เลย เป็นการเสร็จสิ้น

![](../public/screenshots/Pasted%20image%2020241217010002.png)