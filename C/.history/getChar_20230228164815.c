#include <stdio.h>

/// @brief
/// @return
int main()
{
    char ch;
    printf("请输入字符：");  // 1 2 回车
    scanf("%c", &ch);        // 读取 1
    printf("%c", getchar()); // 输出 2
}
